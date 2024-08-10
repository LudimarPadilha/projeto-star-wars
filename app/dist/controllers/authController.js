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
exports.login = void 0;
const dataSource_1 = require("../dataSource");
const userModel_1 = require("../models/userModel");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtUtils_1 = require("../utils/jwtUtils");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userRepository = dataSource_1.AppDataSource.getRepository(userModel_1.User);
        const user = yield userRepository.findOneBy({ email });
        if (!user)
            return res.status(404).json({ error: 'Usuario não encontrado' });
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword)
            return res.status(401).json({ error: 'Senha invalida' });
        //    const token = generateToken({ id: user.id, email: user.email });
        const token = (0, jwtUtils_1.generateToken)({ email: user.email, password: user.password, afiliacao: user.afiliacao });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro no login ' });
    }
});
exports.login = login;
