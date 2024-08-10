"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validaNave = exports.validaPersonagem = exports.validaEstelar = exports.validaPlanets = void 0;
const joi_1 = __importDefault(require("joi"));
// Middleware para validar entrada para criar ou atualizar Planetas
const validaPlanets = (req, res, next) => {
    const schema = joi_1.default.object({
        nome: joi_1.default.string().required(),
        clima: joi_1.default.string().required(),
        terreno: joi_1.default.string().required(),
        populacao: joi_1.default.number().required() //,planetas: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res.status(400).json({ error: error.details[0].message });
    next();
};
exports.validaPlanets = validaPlanets;
//Valida Estelar
const validaEstelar = (req, res, next) => {
    const schema = joi_1.default.object({
        nome: joi_1.default.string().required(),
        descricao: joi_1.default.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res.status(400).json({ error: error.details[0].message });
    next();
};
exports.validaEstelar = validaEstelar;
//Valida Personagem
const validaPersonagem = (req, res, next) => {
    const schema = joi_1.default.object({
        nome: joi_1.default.string().required(),
        raca: joi_1.default.string().required(),
        afiliacao: joi_1.default.string().required(),
        planetaNatal: joi_1.default.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res.status(400).json({ error: error.details[0].message });
    next();
};
exports.validaPersonagem = validaPersonagem;
//Valida Nave
const validaNave = (req, res, next) => {
    const schema = joi_1.default.object({
        nome: joi_1.default.string().required(),
        modelo: joi_1.default.string().required(),
        fabricante: joi_1.default.string().required(),
        passageiros: joi_1.default.number().required()
    });
    const { error } = schema.validate(req.body);
    if (error)
        return res.status(400).json({ error: error.details[0].message });
    next();
};
exports.validaNave = validaNave;
