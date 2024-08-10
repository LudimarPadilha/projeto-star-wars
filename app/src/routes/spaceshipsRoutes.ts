import { Router } from 'express';
import { createNave, getNave, getNaveId, updateNave, deleteNave } from '../controllers/spaceshipsController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validaNave } from '../middleware/validationMiddleware';

const router = Router();

router.post('/', authMiddleware, validaNave, createNave);
router.get('/', getNave);
router.get('/:id', getNaveId);
router.put('/:id', authMiddleware, validaNave, updateNave);
router.delete('/:id', authMiddleware, deleteNave);

export default router;