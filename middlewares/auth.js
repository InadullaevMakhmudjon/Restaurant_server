export default (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.toString().split(' ')[1];
    next();
  } else {
    res.send(401);
  }
};
