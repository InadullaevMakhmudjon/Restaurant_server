import { Router } from 'express';
import restaurants from '../controllers/restaurants';
import middleware from '../middlewares/auth';

const router = Router();

router.get('/', middleware, restaurants.getAll);

export default router;
