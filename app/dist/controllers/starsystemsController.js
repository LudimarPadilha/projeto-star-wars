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
exports.deleteEstelar = exports.updateEstelar = exports.getEstelarId = exports.getEstelar = exports.createEstelar = void 0;
const dataSource_1 = require("../dataSource");
const starsystems_1 = require("../models/starsystems");
// Criar um Sistema Solar
const createEstelar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estelarRepository = dataSource_1.AppDataSource.getRepository(starsystems_1.SistemasEstelares);
        const estelar = estelarRepository.create(req.body);
        yield estelarRepository.save(estelar);
        res.status(201).json(estelar);
    }
    catch (error) {
        res.status(400).json({ error: 'Error ao criar o Sistema Solar' });
    }
});
exports.createEstelar = createEstelar;
// Consultar todos os Sistema Solar
const getEstelar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estelarRepository = dataSource_1.AppDataSource.getRepository(starsystems_1.SistemasEstelares);
        const estelar = yield estelarRepository.find();
        res.status(200).json(estelar);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao consultar o Sistema Solar' });
    }
});
exports.getEstelar = getEstelar;
// Consultar um Sistema Solar pelo id
const getEstelarId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estelarRepository = dataSource_1.AppDataSource.getRepository(starsystems_1.SistemasEstelares);
        const estelar = yield estelarRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!estelar)
            return res.status(404).json({ error: 'Sistema Solar não encontrado' });
        res.status(200).json(estelar);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao consultar Sistema Solar' });
    }
});
exports.getEstelarId = getEstelarId;
// Atualizar informações de um Sistema solar pelo id
const updateEstelar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estelarRepository = dataSource_1.AppDataSource.getRepository(starsystems_1.SistemasEstelares);
        const estelar = yield estelarRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!estelar)
            return res.status(404).json({ error: 'Sistema Solar não encontrado' });
        estelarRepository.merge(estelar, req.body);
        yield estelarRepository.save(estelar);
        res.status(200).json(estelar);
    }
    catch (error) {
        res.status(400).json({ error: 'Error ao atualizar as informações do Sistema Solar' });
    }
});
exports.updateEstelar = updateEstelar;
// Deletar um Sistema Solar
const deleteEstelar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estelarRepository = dataSource_1.AppDataSource.getRepository(starsystems_1.SistemasEstelares);
        const estelar = yield estelarRepository.findOneBy({ id: parseInt(req.params.id) });
        if (!estelar)
            return res.status(404).json({ error: 'Sistema Solar não encontrado' });
        yield estelarRepository.remove(estelar);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao deletar o Sistema Solar' });
    }
});
exports.deleteEstelar = deleteEstelar;
