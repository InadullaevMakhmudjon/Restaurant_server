import { Router } from 'express';
import { check, validate } from '../util/validations/restaurant';
import restaurants from '../controllers/restaurants';
import middleware from '../middlewares/auth';

const router = Router();

router.get('/:id', restaurants.get);
router.get('/', restaurants.getAll);
router.post('/', middleware, check, validate, restaurants.create);
router.put('/:id', middleware, check, validate, restaurants.update);
router.delete('/:id', middleware, restaurants.delete);

export default router;
