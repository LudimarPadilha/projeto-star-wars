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
exports.deletePersonagem = exports.updatePersonagem = exports.getPersonagemId = exports.getPersonagem = exports.createPersonagem = void 0;
const dataSource_1 = require("../dataSource");
const characters_1 = require("../models/characters");
// Criar um Personagem
const createPersonagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personagemRepository = dataSource_1.AppDataSource.getRepository(characters_1.Personagens);
        const personagem = personagemRepository.create(req.body);
        yield personagemRepository.save(personagem);
        res.status(201).json(personagem);
    }
    catch (error) {
        res.status(400).json({ error: 'Error ao criar o Personagem' });
    }
});
exports.createPersonagem = createPersonagem;
// Consultar todos os Personagens
const getPersonagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personagemRepository = dataSource_1.AppDataSource.getRepository(characters_1.Personagens);
        const personagens = yield personagemRepository.find();
        res.status(200).json(personagens);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao consultar os Personagens' });
    }
});
exports.getPersonagem = getPersonagem;
// Consultar um Personagem pelo Id
const getPersonagemId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personagemRepository = dataSource_1.AppDataSource.getRepository(characters_1.Personagens);
        const personagem = yield personagemRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!personagem)
            return res.status(404).json({ error: 'Personagem não encontrado' });
        res.status(200).json(personagem);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao consultar Personagem' });
    }
});
exports.getPersonagemId = getPersonagemId;
// Atualizar informações de um Personagem pelo id
const updatePersonagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personagemRepository = dataSource_1.AppDataSource.getRepository(characters_1.Personagens);
        const personagem = yield personagemRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!personagem)
            return res.status(404).json({ error: 'Personagem não encontrado' });
        personagemRepository.merge(personagem, req.body);
        yield personagemRepository.save(personagem);
        res.status(200).json(personagem);
    }
    catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar as informações do Personagem' });
    }
});
exports.updatePersonagem = updatePersonagem;
// Deletar um Personagem
const deletePersonagem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personagemRepository = dataSource_1.AppDataSource.getRepository(characters_1.Personagens);
        const personagem = yield personagemRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!personagem)
            return res.status(404).json({ error: 'Personagem não encontrado' });
        yield personagemRepository.remove(personagem);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar o Personagem' });
    }
});
exports.deletePersonagem = deletePersonagem;
