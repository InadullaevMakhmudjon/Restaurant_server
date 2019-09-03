import { checkSchema, validationResult } from 'express-validator';

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
  foodId: {
    isInt: true,
  },
  typeId: {
    isInt: true,
  },
  restaurantId: {
    isInt: true,
  },
  amount: {
    isFloat: true,
  },
  quantity: {
    isInt: true,
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
      foodId: req.body.foodId,
      typeId: req.body.typeId,
      restaurantId: req.body.restaurantId,
      amount: req.body.amount,
      quantity: req.body.quantity,
      approved: false,
      shipped: false,
      createdAt: new Date(),
    };
    next();
  }
}
