export const check = ['name', 'description', 'title', 'info', 'minPrice'];

export function validate(req, res, next) {
  check.forEach((key) => {
    if (!req.body[key]) throw new Error(`${key} is not defined`);
  });
  req.restaurant = {
    name: req.body.name,
    description: req.body.description,
    title: req.body.title,
    info: req.body.info,
    minPrice: req.body.minPrice,
    image: `${process.env.BASE_URL}/${req.file.path}`,
  };
  next();
}
