import { checkSchema, validationResult } from 'express-validator';
import models from '../../models';
import exist from '../check';

export const check = checkSchema({
  address: {
    isString: true,
  },
  clientName: {
    isString: true,
  },
  clientPhone: {
    isString: true,
  },
  comment: {
    isString: true,
  },
  restaurantId: {
    isInt: true,
  },
  lat: {
    isFloat: true,
  },
  long: {
    isFloat: true,
  },
  food: {
    isArray: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({ errors });
  } else {
    req.delivery = {
      address: req.body.address,
      clientName: req.body.clientName,
      clientPhone: req.body.clientPhone,
      comment: req.body.comment,
      restaurantId: req.body.restaurantId,
      quantity: req.body.quantity,
      approved: false,
      shipped: false,
      lat: req.body.lat,
      long: req.body.long,
      food: req.body.food,
      createdAt: new Date(),
    };
    next();
  }
}
