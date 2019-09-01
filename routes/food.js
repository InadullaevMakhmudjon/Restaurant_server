import { Router } from 'express';
import { validate } from '../util/validations/food';
import middleware from '../middlewares/auth';
import uploade from '../middlewares/uploads';
import handler from '../middlewares/handler';
import food from '../controllers/food';

const router = Router();

router.get('/:id', food.get);
router.get('/', food.getAll);
router.post('/', middleware, uploade('image'), validate, food.create, handler);
router.put('/:id', middleware, uploade('image'), validate, food.update, handler);
router.delete('/:id', middleware, food.delete);

export default router;
