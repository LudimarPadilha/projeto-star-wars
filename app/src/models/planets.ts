import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { SistemasEstelares } from './starsystems';

@Entity()
export class Planets {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  clima!: string;

  @Column()
  terreno!: string;

  @Column()
  populacao!: number;

  @ManyToOne(() => SistemasEstelares, sistemasEstelar => sistemasEstelar.sistemaEstelar)
  @JoinColumn({ name: 'sistemaEstelarId' })
  sistemaEstelar!: SistemasEstelares;  
};