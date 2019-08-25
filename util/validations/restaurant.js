import { checkSchema, validationResult } from 'express-validator';

export const check = checkSchema({
  name: {
    isString: true,
  },
  description: {
    isString: true,
  },
  title: {
    isString: true,
  },
  info: {
    isString: true,
  },
  minPrice: {
    isFloat: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({ errors });
  } else {
    req.restaurant = {
      name: req.body.name,
      description: req.body.description,
      title: req.body.title,
      info: req.body.info,
      minPrice: req.body.minPrice,
      image: '___',
    };
    next();
  }
}
