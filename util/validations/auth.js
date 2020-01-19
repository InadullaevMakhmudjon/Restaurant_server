import { checkSchema, validationResult } from 'express-validator';
import { hashSync } from 'bcryptjs';

export const check = checkSchema({
  name: {
    isString: true,
  },
  username: {
    isString: true,
  },
  password: {
    isString: true,
  },
});

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(403).json({ errors });
  } else {
    req.user = {
      name: req.body.name,
      username: req.body.username,
      password: hashSync(req.body.password, 10),
    };
    next();
  }
}
