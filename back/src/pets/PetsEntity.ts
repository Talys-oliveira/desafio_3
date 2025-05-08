import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class pets {
  @PrimaryGeneratedColumn()
  image: string;

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gene: string;

  @Column()
  age: string;

  @Column()
  price: number;
}
