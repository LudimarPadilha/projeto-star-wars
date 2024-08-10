import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Nave {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  modelo!: string;

  @Column()
  fabricante!: string;

  @Column()
  passageiros!: number;

};