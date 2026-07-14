import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { QueryEventsDto } from './dto/query-events.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = this.eventRepository.create(createEventDto);
    return await this.eventRepository.save(event);
  }

  async findAll(query: QueryEventsDto) {
    const {
      search,
      category,
      date,
      page = 1,
      limit = 9,
    } = query;

    const qb = this.eventRepository.createQueryBuilder('event');

    if (search) {
      qb.andWhere('event.title ILIKE :search', {
        search: `%${search}%`,
      });
    }

    if (category) {
      qb.andWhere('event.category = :category', {
        category,
      });
    }

    if (date) {
      qb.andWhere('DATE(event.date) = :date', {
        date,
      });
    }

    qb
      .orderBy('event.date', 'ASC')
      .skip((page - 1) * limit)
      .take(limit);

    const [items, total] = await qb.getManyAndCount();

    return {
      items,
      total,
      page,
      limit,
    };
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOne({
      where: { id },
    });

    if (!event) {
      throw new NotFoundException('Событие не найдено');
    }

    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.findOne(id);

    await this.eventRepository.update(id, updateEventDto);

    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.eventRepository.delete(id);

    return {
      message: 'Событие успешно удалено',
    };
  }
}