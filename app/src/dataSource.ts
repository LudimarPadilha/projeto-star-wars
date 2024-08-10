//importando bibliotecas e suas dependencias.
import { DataSource } from 'typeorm';
import { User } from './models/userModel';
import { Planets } from './models/planets';
import { SistemasEstelares } from './models/starsystems';

//Criando condição para verificar se o tipo é inteiro se não for joga 5432
const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'db',
  port: dbPort,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_NAME || 'starwars',
  //entities: [User],
  entities: [User, Planets, SistemasEstelares],
  synchronize: true, // não usar em produção, apenas para desenvolvimento
});
