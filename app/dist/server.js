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
const app_1 = __importDefault(require("./app"));
const dataSource_1 = require("./dataSource"); // Corrigido o caminho para dataSources
const PORT = process.env.PORT || 3001;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Inicializar DataSource
        yield dataSource_1.AppDataSource.initialize();
        console.log('inicilizando o Data Source!');
        // Iniciar o servidor
        app_1.default.listen(PORT, () => {
            console.log(`Servidor está rodando na porta ${PORT}`);
        });
    }
    catch (error) {
        console.error('Erro durante a inicialização do Data Source:', error);
        process.exit(1); // Encerra o processo com código de erro
    }
});
startServer();
