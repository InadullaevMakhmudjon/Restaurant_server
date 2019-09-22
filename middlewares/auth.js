import { verify } from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.toString().split(' ')[1];
    if (token) {
      verify(token, process.env.JWT_KEY, {}, (err, data) => {
        if (err) { res.send(401); } else {
          req.userId = data.userId;
          // User type, 1 for admins, 2 for restaurants
          req.userType = data.type;
          next();
        }
      });
    } else {
      res.send(401);
    }
  } else {
    res.send(401);
  }
};
