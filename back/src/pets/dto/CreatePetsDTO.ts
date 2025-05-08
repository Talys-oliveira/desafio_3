import { IsNumber, IsString, isString } from 'class-validator';

export class createPetsDTO {
  @isString()
  image: string;

  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  gene: string;

  @IsString()
  age: string;

  @IsNumber()
  price: number;
}
