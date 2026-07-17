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
} from 'class-validator';
import { Category } from '../category.enum';

export class UpdateEventDto {
  @IsString({ message: 'Название должно быть строкой' })
  @Length(3, 200)
  @IsOptional()
  title?: string;

  @IsString({ message: 'Описание должно быть строкой' })
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @Length(3, 200)
  @IsOptional()
  location?: string;

  @IsDateString()
  @IsOptional()
  date?: string;

  @IsEnum(Category)
  @IsOptional()
  category?: Category;

  @IsDecimal()
  @IsOptional()
  @Matches(/^\d+(\.\d{1,2})?$/, { message: 'Цена не должна быть меньше 0 и может содержать до 2 знаков после запятой' })
  price?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
