import { Router } from 'express';
import { check, validate } from '../util/validations/food';
import middleware from '../middlewares/auth';
import food from '../controllers/food';

const router = Router();

router.get('/:id', food.get);
router.get('/', food.getAll);
router.post('/', middleware, check, validate, food.create);
router.put('/:id', middleware, check, validate, food.update);
router.delete('/:id', middleware, food.delete);

export default router;
