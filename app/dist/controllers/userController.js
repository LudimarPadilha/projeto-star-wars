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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsuario = void 0;
const dataSource_1 = require("../dataSource");
const userModel_1 = require("../models/userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, afiliacao } = req.body;
        // Verifique se o usuário já existe
        const userRepository = dataSource_1.AppDataSource.getRepository(userModel_1.User);
        const existingUser = yield userRepository.findOneBy({ email });
        if (existingUser)
            return res.status(400).json({ error: 'Usuário já existe' });
        // Crie um novo usuário
        const hashedPassword = bcryptjs_1.default.hashSync(password, 10);
        const user = new userModel_1.User();
        user.email = email;
        user.password = hashedPassword;
        user.afiliacao = afiliacao;
        yield userRepository.save(user);
        res.status(201).json({ message: 'Usuário criado com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});
exports.createUsuario = createUsuario;
