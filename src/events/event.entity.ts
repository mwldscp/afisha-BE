import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { Category } from './category.enum';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column('text')
  description: string;

  @Column()
  date: Date;

  @Column({ length: 200 })
  location: string;

  @Column({
    type: 'enum',
    enum: Category,
  })
  category: Category;

  @Column()
  price: number;

  @Column({
    length: 500,
    nullable: true,
  })
  imageUrl?: string;

  @CreateDateColumn()
  createdAt: Date;
}