import { Router } from 'express';
import { validate } from '../util/validations/restaurant';
import restaurants from '../controllers/restaurants';
import middleware from '../middlewares/auth';
import uploade from '../middlewares/uploads';
import handler from '../middlewares/handler';

const router = Router();

router.get('/:id', restaurants.get);
router.get('/', restaurants.getAll);
router.post('/', middleware, uploade('image'), validate, restaurants.create, handler);
router.put('/:id', middleware, uploade('image'), validate, restaurants.update, handler);
router.delete('/:id', middleware, restaurants.delete);

export default router;
