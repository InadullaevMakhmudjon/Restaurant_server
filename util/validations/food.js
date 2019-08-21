import { checkSchema, validationResult } from 'express-validator';

export const check = checkSchema({
  name: {
    isString: true,
  },
  description: {
    isString: true,
  },
  price: {
    isFloat: true,
  },
  categoryId: {
    isInt: true,
  },
  restaurantId: {
    isInt: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({ errors });
  } else {
    req.food = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: '___',
      categoryId: req.body.categoryId,
      restaurantId: req.body.restaurantId,
    };
    next();
  }
}
