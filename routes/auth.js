import { Router } from 'express';
import middleware from '../middlewares/auth';
import auth from '../controllers/auth';

const router = Router();

router.get('/', middleware, auth.details);
router.post('/', auth.registration);
router.post('/login', auth.login);

export default router;
