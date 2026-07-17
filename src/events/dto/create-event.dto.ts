import {
  IsString,
  Length,
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsOptional,
  IsUrl,
  IsDecimal,
  Matches,
  MinDate,
  IsDate,
} from 'class-validator';
import { Category } from '../category.enum';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Название обязательно' })
  @Length(3, 200)
  title!: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsNotEmpty({ message: 'Описание обязательно' })
  description!: string;

  @IsDate()
  @IsNotEmpty({ message: 'Дата обязательна' })
  @MinDate(new Date(), {message: "Дата не может быть в прошлом"})
  @Type(()=> Date)
  date!: Date;

  @IsString({ message: 'Место должно быть строкой' })
  @IsNotEmpty({ message: 'Место обязательно' })
  @Length(3, 200)
  location!: string;

  @IsEnum(Category)
  @IsNotEmpty({ message: 'Категория обязательна' })
  category!: Category;

  @IsDecimal()
  @IsNotEmpty({ message: 'Цена товара обязательна' })
  @Matches(/^\d+(\.\d{1,2})?$/, { message: 'Цена не должна быть меньше 0 и может содержать до 2 знаков после запятой' })
  price!: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
