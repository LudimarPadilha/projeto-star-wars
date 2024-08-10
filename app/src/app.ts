// importando bibliotecas e dependencias
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//Declaração adicional
declare global {
  namespace Express {
    interface Request {
      user?: any; // Defina o tipo de `user` conforme necessário
    }
  }
}

// Importando rotas
import planetsRoutes from './routes/planetsRoutes';
import starsystemsRoutes from './routes/starsystemsRoutes';
import charactersRoutes from './routes/charactersRoutes';
import spaceshipsRoutes from './routes/spaceshipsRoutes';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

// Configurar variáveis de ambiente
dotenv.config();

const app = express();

// Configuração de middleware
app.use(cors());
app.use(express.json()); // Para analisar payloads JSON

// Configurando rotas
app.use('/users', userRoutes)
app.use('/login', authRoutes);
app.use('/planets', planetsRoutes);
app.use('/starsystems', starsystemsRoutes);
app.use('/characters', charactersRoutes);
app.use('/spaceships', spaceshipsRoutes);

// Middleware para tratamento de erros
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno no servidor' });
});

export default app;