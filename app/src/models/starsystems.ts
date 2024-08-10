import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Planets } from './planets';

@Entity()
export class SistemasEstelares {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  descricao!: string;

  @OneToMany(() => Planets, planets => planets.sistemaEstelar)
  sistemaEstelar!: Planets[];
}