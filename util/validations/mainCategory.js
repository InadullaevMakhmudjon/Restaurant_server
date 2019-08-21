import { checkSchema, validationResult } from 'express-validator';

export const check = checkSchema({
  name: {
    isString: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({ errors });
  } else {
    req.mainCategory = {
      name: req.body.name,
    };
    next();
  }
}
