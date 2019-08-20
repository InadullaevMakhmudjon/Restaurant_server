import { Router } from 'express';
import middleware from '../middlewares/auth';
import auth from '../controllers/auth';
import { check, validate } from '../util/validations/auth';

const router = Router();

router.get('/', middleware, auth.details);
router.post('/', check, validate, auth.registration);
router.post('/login', auth.login);

export default router;
