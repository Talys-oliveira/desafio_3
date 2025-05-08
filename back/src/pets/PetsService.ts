import { InjectRepository } from "@nestjs/typeorm";
import { pets } from "./PetsEntity";
import { createPetsDTO } from "./dto/CreatePetsDTO";
import { Repository } from "typeorm";

export class PetsService {
    constructor (
        @InjectRepository(pets)
        private readonly petsRepository: Repository<pets>,
    ) {}

    async create(createPetsDTO: CreatePetsDTO); Promise<pets> {
        return this.petsRepository.save(createPetsDTO);
    }
    
}