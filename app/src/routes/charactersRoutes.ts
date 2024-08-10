import { Router } from 'express';
import { createPersonagem, getPersonagem, getPersonagemId, updatePersonagem, deletePersonagem } from '../controllers/charactersController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validaPersonagem } from '../middleware/validationMiddleware';

const router = Router();

router.post('/', authMiddleware, validaPersonagem, createPersonagem);
router.get('/', getPersonagem);
router.get('/:id', getPersonagemId);
router.put('/:id', authMiddleware, validaPersonagem, updatePersonagem);
router.delete('/:id', authMiddleware, deletePersonagem);

export default router;