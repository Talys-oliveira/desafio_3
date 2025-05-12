import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { pets } from './pets/PetsEntity';

@Injectable()
export class AppService {
  constructor(
    // @InjectRepository(pets)
    // private userRepository: Repository<pets>, // Aqui você vai acessar os dados do banco de dados
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
