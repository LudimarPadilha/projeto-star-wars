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
exports.deletePlanets = exports.updatePlanets = exports.getPlanetsId = exports.getPlanets = exports.createPlanets = void 0;
const dataSource_1 = require("../dataSource");
const planets_1 = require("../models/planets");
const repositorioPlanets = dataSource_1.AppDataSource.getRepository(planets_1.Planets);
// Criar um Planeta
const createPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, clima, terreno, populacao } = req.body;
        if (!nome || !clima || !terreno || typeof populacao !== 'number') {
            return res.status(400).json({ error: 'Dados inseridos inválidos, verificar o conteudo de envio.' });
        }
        const newPlanet = new planets_1.Planets();
        newPlanet.nome = nome;
        newPlanet.clima = clima;
        newPlanet.terreno = terreno;
        newPlanet.populacao = populacao;
        //newPlanet.planetas = planetasId;
        yield repositorioPlanets.save(newPlanet);
        res.status(201).json({ message: 'Planeta criado com sucesso', planet: newPlanet });
    }
    catch (error) {
        console.error(error); // Log para depuração
        res.status(500).json({ error: 'Erro ao criar planeta' });
    }
});
exports.createPlanets = createPlanets;
// Consultar todos os Planetas
const getPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Tentando buscar planetas...');
        const planets = yield repositorioPlanets.find();
        console.log('Planetas encontrados:', planets);
        res.status(200).json(planets);
    }
    catch (error) {
        console.error('Erro ao buscar planetas:', error);
        res.status(500).json({ error: 'Erro ao buscar planetas' });
    }
});
exports.getPlanets = getPlanets;
// Consultar um Planeta pelo id
const getPlanetsId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const planets = yield repositorioPlanets.findOneBy({ id: parseInt(req.params.id) });
        if (!planets)
            return res.status(404).json({ error: 'Planeta não encontrada' });
        res.status(200).json(planets);
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao buscar Planeta' });
    }
});
exports.getPlanetsId = getPlanetsId;
// Atualizar informações de um Planeta pelo id
const updatePlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const planets = yield repositorioPlanets.findOneBy({ id: parseInt(req.params.id) });
        if (!planets)
            return res.status(404).json({ error: 'Planeta não encontrado' });
        repositorioPlanets.merge(planets, req.body);
        yield repositorioPlanets.save(planets);
        res.status(200).json(planets);
    }
    catch (error) {
        res.status(400).json({ error: 'Error ao atualizar informações do Planeta' });
    }
});
exports.updatePlanets = updatePlanets;
// Deletar um Planeta
const deletePlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const planets = yield repositorioPlanets.findOneBy({ id: parseInt(req.params.id) });
        if (!planets)
            return res.status(404).json({ error: 'Planeta não encontrada' });
        yield repositorioPlanets.remove(planets);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Error ao deletar Planeta' });
    }
});
exports.deletePlanets = deletePlanets;
