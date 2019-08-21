import { Router } from 'express';
import { check, validate } from '../util/validations/category';
import middleware from '../middlewares/auth';
import categories from '../controllers/categories';

const router = Router();

router.get('/:id', categories.get);
router.get('/', categories.getAll);
router.post('/', middleware, check, validate, categories.create);
router.put('/', middleware, check, validate, categories.update);
router.delete('/:id', middleware, categories.delete);

export default router;
