import {
  IsString,
  Length,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsUrl,
  IsDecimal,
  Matches,
  IsDateString,
  MaxLength,
  IsDate,
  MinDate,
} from 'class-validator';
import { Category } from '../category.enum';
import { Type } from 'class-transformer';

export class UpdateEventDto {
  @IsString({ message: 'Название должно быть строкой. ' })
  @Length(3, 200, { message: 'Название должно содержать от 3 до 200 символов. ' })
  @IsOptional()
  title?: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsNotEmpty({ message: 'Описание обязательно. ' })
  @IsOptional()
  description?: string;

  @IsString({ message: 'Место должно быть строкой. ' })
  @IsNotEmpty({ message: 'Место обязательно. ' })
  @MaxLength(200, { message: 'Место не может быть длиннее 200 символов. ' })
  @IsOptional()
  location?: string;

  @IsDate({ message: 'Введите корректный формат даты. ' })
  @IsNotEmpty({ message: 'Дата обязательна. ' })
  @MinDate(new Date(), { message: 'Дата не может быть в прошлом. ' })
  @Type(() => Date)
  @IsOptional()
  date?: string;

  @IsEnum(Category)
  @IsOptional()
  category?: Category;

 @IsDecimal({}, { message: 'Цена должна быть корректным десятичным числом. ' })
  @IsNotEmpty({ message: 'Цена товара обязательна. ' })
  @Matches(/^\d+(\.\d{1,2})?$/, {
    message:
      'Цена не должна быть меньше 0 и может содержать до 2 знаков после запятой. ',
  })
  @IsOptional()
  price?: string;

  @IsOptional()
  @IsUrl({}, { message: 'Укажите корректный URL-адрес для фото. ' })
  imageUrl?: string;
}
