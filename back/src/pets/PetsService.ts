import { InjectRepository } from "@nestjs/typeorm";
import { Pets } from "./PetsEntity";
import { Repository } from "typeorm";
import { CreatePetsDTO } from "./dto/CreatePetsDTO";

export class PetsService {
    constructor (
        @InjectRepository(Pets)
        private readonly petsRepository: Repository<Pets>,
    ) {}

    async create(createPetsDTO: CreatePetsDTO): Promise<Pets> {
        return this.petsRepository.save(createPetsDTO);
    }

    async findAll(): Promise<Pets[] | null> {
        return await this.petsRepository.find();
    }
    
}