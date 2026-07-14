import {
  IsString,
  Length,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsInt,
  Min,
  IsOptional,
  IsUrl,
} from 'class-validator';
import { Category } from '../category.enum';

export class CreateEventDto {
  @IsString()
  @Length(3, 200)
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsDateString()
  date!: string;

  @IsString()
  @Length(3, 200)
  location!: string;

  @IsEnum(Category)
  category!: Category;

  @IsInt()
  @Min(0)
  price!: number;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}