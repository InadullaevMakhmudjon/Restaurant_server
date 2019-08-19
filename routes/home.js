import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({
    messages: [
      {
        id: 1,
        title: 'Hello',
      },
      {
        id: 2,
        title: 'World',
      },
      {
        id: 3,
        title: '!!!',
      },
    ],
  });
});

export default router;
