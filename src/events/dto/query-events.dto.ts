import { IsOptional, IsString, IsInt, Min, IsDateString, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { Category } from '../category.enum';

export class QueryEventsDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit: number = 9;
}