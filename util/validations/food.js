
export const check = ['name', 'description', 'price', 'categoryId', 'restaurantId'];

export function validate(req, res, next) {
  check.forEach((key, index) => {
    if (!req.body[key]) throw new Error(`${key} is not defined`);
  });

  req.food = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: `${process.env.BASE_URL}/${req.file.path}`,
    categoryId: req.body.categoryId,
    restaurantId: req.body.restaurantId,
  };
  next();
}
