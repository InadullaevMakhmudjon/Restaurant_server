import { Router } from 'express';
import { check, validate } from '../util/validations/mainCategory';
import middleware from '../middlewares/auth';
import mainCategory from '../controllers/mainCategory';

const router = Router();

router.get('/:id', mainCategory.get);
router.get('/', mainCategory.getAll);
router.post('/', middleware, check, validate, mainCategory.create);
router.put('/:id', middleware, check, validate, mainCategory.update);
router.delete('/:id', middleware, mainCategory.delete);

export default router;
