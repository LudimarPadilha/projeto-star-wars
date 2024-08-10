"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
//importando bibliotecas e suas dependencias.
const typeorm_1 = require("typeorm");
const userModel_1 = require("./models/userModel");
const planets_1 = require("./models/planets");
const starsystems_1 = require("./models/starsystems");
//Criando condição para verificar se o tipo é inteiro se não for joga 5432
const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'db',
    port: dbPort,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '123456',
    database: process.env.DB_NAME || 'starwars',
    //entities: [User],
    entities: [userModel_1.User, planets_1.Planets, starsystems_1.SistemasEstelares],
    synchronize: true, // não usar em produção, apenas para desenvolvimento
});
