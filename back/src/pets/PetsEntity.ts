import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pets {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  sku: number;

  @Column()
  name: string;

  @Column()
  gene: string;

  @Column()
  age: string;

  @Column()
  price: number;

  @Column()
  images: string;

  @Column()
  additional_information: string

}
