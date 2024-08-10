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
exports.deleteNave = exports.updateNave = exports.getNaveId = exports.getNave = exports.createNave = void 0;
const dataSource_1 = require("../dataSource");
const spaceships_1 = require("../models/spaceships");
//Criar uma Nave
const createNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const naveRepository = dataSource_1.AppDataSource.getRepository(spaceships_1.Nave);
        const nave = naveRepository.create(req.body);
        yield naveRepository.save(nave);
        res.status(201).json(nave);
    }
    catch (error) {
        res.status(400).json({ error: 'Error ao criar a Nave' });
    }
});
exports.createNave = createNave;
//Consultar todas as Naves
const getNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const naveRepository = dataSource_1.AppDataSource.getRepository(spaceships_1.Nave);
        const nave = yield naveRepository.find();
        res.status(200).json(nave);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao consultar as Naves' });
    }
});
exports.getNave = getNave;
//Consultar uma Nave pelo Id
const getNaveId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const naveRepository = dataSource_1.AppDataSource.getRepository(spaceships_1.Nave);
        const nave = yield naveRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!nave)
            return res.status(404).json({ error: 'Nave não encontrada' });
        res.status(200).json(nave);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao consultar a Nave' });
    }
});
exports.getNaveId = getNaveId;
//Atualizar as informações de uma Nave pelo Id
const updateNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const naveRepository = dataSource_1.AppDataSource.getRepository(spaceships_1.Nave);
        const nave = yield naveRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!nave)
            return res.status(404).json({ error: 'Nave não encontrada' });
        naveRepository.merge(nave, req.body);
        yield naveRepository.save(nave);
        res.status(200).json(nave);
    }
    catch (error) {
        res.status(400).json({ error: 'Error ao atualizar as informações da Nave' });
    }
});
exports.updateNave = updateNave;
//Deletar uma Nave
const deleteNave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const naveRepository = dataSource_1.AppDataSource.getRepository(spaceships_1.Nave);
        const nave = yield naveRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!nave)
            return res.status(404).json({ error: 'Nave não encontrada' });
        yield naveRepository.remove(nave);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao deletar a Nave' });
    }
});
exports.deleteNave = deleteNave;
