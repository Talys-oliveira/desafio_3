import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Pets } from './pets/PetsEntity';
import { PetsModule } from './pets/PetsModule';

console.log(process.env.DB_PORT)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: parseInt('3306'),
      username: 'root',
      password: '',
      database: 'dbdogs',
      entities: [Pets],
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: parseInt(process.env.DB_PORT || '3306'),
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    //   entities: [Pets],
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    TypeOrmModule.forFeature([Pets]),
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
