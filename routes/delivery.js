import { Router } from 'express';
import { check, validate } from '../util/validations/delivery';
import auth from '../middlewares/auth';
import delivery from '../controllers/delivery';

const router = Router();

router.get('/', auth, delivery.getAll);
router.get('/:id', auth, delivery.get);
router.post('/', check, validate, delivery.create);
router.post('/approve/:id', auth, delivery.approve);
router.post('/shipped/:id', auth, delivery.shipped);
router.post('/:id', check, validate, delivery.update);
router.delete('/:id', delivery.delete);

export default router;
