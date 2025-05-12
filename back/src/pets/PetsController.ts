import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetsService } from './PetsService';
import { Pets } from './PetsEntity';
import { CreatePetsDTO } from './dto/CreatePetsDTO';

@Controller('pets') // /pets/add - /pets/1
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() createPetsDTO: CreatePetsDTO): Promise<Pets> {
    return this.petsService.create(createPetsDTO);
  }

  @Get()
  async findAll(): Promise<Pets[] | null> {
        return this.petsService.findAll();
    }
}
