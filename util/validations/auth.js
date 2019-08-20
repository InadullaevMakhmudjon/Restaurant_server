import { checkSchema, validationResult } from 'express-validator/check';
import { hashSync } from 'bcrypt';

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
    res.send(errors);
  } else {
    req.user = {
      name: req.body.name,
      username: req.body.username,
      password: hashSync(req.body.password, 10),
    };
    next();
  }
}
