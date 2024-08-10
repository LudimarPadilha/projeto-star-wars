//importando bibliotecas e dependencias.
import { Router } from 'express';
import { createUsuario } from '../controllers/userController';

const router = Router();

router.post('/', createUsuario);

export default router;