import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Personagens {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  raca!: string;

  @Column()
  afiliacao!: string;

  @Column()
  planetaNatal!: string;

};