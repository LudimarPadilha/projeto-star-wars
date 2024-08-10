"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const starsystems_1 = require("../models/starsystems");
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Cria a conexão com o banco de dados
            const connection = yield (0, typeorm_1.createConnection)();
            // Obtém o repositório para a entidade SistemasEstelares
            const sistemasRepository = (0, typeorm_1.getRepository)(starsystems_1.SistemasEstelares);
            // Dados a serem inseridos
            const sistemas = [
                'Coruscant',
                'Tatooine',
                'Hoth',
                'Naboo',
                'Endor',
                'Kamino',
                'Geonosis',
                'Mustafar',
                'Dagobah',
                'Yavin',
                'Bespin',
                'Lothal',
                'Dantooine',
                'Felucia',
                'Sullust',
            ];
            // Verifica se já existem dados na tabela
            const existingSystems = yield sistemasRepository.find();
            if (existingSystems.length === 0) {
                // Se a tabela estiver vazia, insere os dados
                for (const nome of sistemas) {
                    const sistema = new starsystems_1.SistemasEstelares();
                    sistema.nome = nome;
                    sistema.descricao = 'Descrição padrão'; // ou qualquer outra descrição padrão
                    yield sistemasRepository.save(sistema);
                }
                console.log('Dados iniciais inseridos com sucesso.');
            }
            else {
                console.log('Dados já existem na tabela SistemasEstelares.');
            }
            // Fecha a conexão
            yield connection.close();
        }
        catch (error) {
            console.error('Erro ao inicializar o banco de dados:', error);
        }
    });
}
// Executa o script de inicialização
initializeDatabase();
