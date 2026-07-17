import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './category.enum';
import Decimal from 'decimal.js';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 200 })
  title!: string;

  @Column('text')
  description!: string;

  @Column()
  date!: Date;

  @Column({ length: 200 })
  location!: string;

  @Column({
    type: 'enum',
    enum: Category,
  })
  category!: Category;

  @Column({
    type: 'numeric',
    precision: 10,
    scale: 2,
    transformer: {
      to: (value: Decimal) => (value ? value.toString() : value),
      from: (value: string) => (value ? new Decimal(value) : value),
    },
  })
  price!: Decimal;

  @Column({
    length: 500,
    nullable: true,
  })
  imageUrl?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
