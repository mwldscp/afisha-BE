import { IsString, Length, IsNotEmpty, IsDateString, IsEnum, IsInt, Min, IsOptional, IsUrl} from 'class-validator'
import { Category } from '../category.enum';

export class UpdateEventDto {
    @IsString()
    @Length(3, 200)
    @IsOptional()
    title?: string;

    @IsString()
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

    @IsInt()
    @Min(0)
    @IsOptional()
    price?: number;

    @IsOptional()
    @IsUrl()
    imageUrl?: string;
}