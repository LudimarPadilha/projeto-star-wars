import { Router } from 'express';
import { createEstelar, getEstelar, getEstelarId, updateEstelar, deleteEstelar } from '../controllers/starsystemsController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validaEstelar } from '../middleware/validationMiddleware';

const router = Router();

router.post('/', authMiddleware, validaEstelar, createEstelar);
router.get('/', getEstelar);
router.get('/:id', getEstelarId);
router.put('/:id', authMiddleware, validaEstelar, updateEstelar);
router.delete('/:id', authMiddleware, deleteEstelar);

export default router;
