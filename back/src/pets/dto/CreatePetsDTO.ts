import { IsNotEmpty, isNumber, IsNumber, IsString, isString } from 'class-validator';

export class CreatePetsDTO {
  @IsString()
  image: string;

  @IsNumber()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  sku: number;

  @IsString()
  name: string;

  @IsString()
  gene: string;

  @IsString()
  age: string;

  @IsNumber()
  price: number;
}
