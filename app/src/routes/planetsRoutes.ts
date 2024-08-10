import { Router } from 'express';
import { createPlanets, getPlanets, getPlanetsId, updatePlanets, deletePlanets } from '../controllers/planetsController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validaPlanets } from '../middleware/validationMiddleware';

const router = Router();

router.post('/', authMiddleware, validaPlanets, createPlanets);
router.get('/', getPlanets);
router.get('/:id', getPlanetsId);
router.put('/:id', authMiddleware, validaPlanets, updatePlanets);
router.delete('/:id', authMiddleware, deletePlanets);

export default router;