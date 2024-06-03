import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateSaleDto {
  @IsInt()
  bookId: number;

  @IsString()
  customer: string;

  @IsDateString()
  saleDate: string;
}
