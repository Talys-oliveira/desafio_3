import { Module } from "@nestjs/common";
import { PetsController } from "./PetsController";
import { PetsService } from "./PetsService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pets } from "./PetsEntity";


@Module({
    imports: [TypeOrmModule.forFeature([Pets])],
    controllers: [PetsController],
    providers: [PetsService],
    exports: [PetsService]
  })
  export class PetsModule {}