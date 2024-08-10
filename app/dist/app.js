"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importando bibliotecas e dependencias
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Importando rotas
const planetsRoutes_1 = __importDefault(require("./routes/planetsRoutes"));
const starsystemsRoutes_1 = __importDefault(require("./routes/starsystemsRoutes"));
const charactersRoutes_1 = __importDefault(require("./routes/charactersRoutes"));
const spaceshipsRoutes_1 = __importDefault(require("./routes/spaceshipsRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Configurar variáveis de ambiente
dotenv_1.default.config();
const app = (0, express_1.default)();
// Configuração de middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Para analisar payloads JSON
// Configurando rotas
app.use('/users', userRoutes_1.default);
app.use('/login', authRoutes_1.default);
app.use('/planets', planetsRoutes_1.default);
app.use('/starsystems', starsystemsRoutes_1.default);
app.use('/characters', charactersRoutes_1.default);
app.use('/spaceships', spaceshipsRoutes_1.default);
// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno no servidor' });
});
exports.default = app;
