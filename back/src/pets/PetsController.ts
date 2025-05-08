import { Body } from '@nestjs/common';
import { PetsService } from './PetsService';
import { createPetsDTO } from './dto/CreatePetsDTO';
import { pets } from './PetsEntity';

export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  async create(@Body() createPetsDTO: createPetsDTO): Promise<pets> {
    return this.petsService.create(createPetsDTO);
  }
}
