import { Router } from 'express';
import auth from '../middlewares/auth';
import type from '../controllers/type';

const router = Router();

router.get('/', auth, type.getAll);
router.get('/:id', auth, type.get);

export default router;
