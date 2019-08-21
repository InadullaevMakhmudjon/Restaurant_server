import models from '../models';

function find(where, res, next) {
  models.MainCategory.findAll({ where })
    .then((data) => next(data))
    .catch((err) => res.status(501).json({ err }));
}

function execute(promise, res) {
  promise.then(() => res.send(200))
    .catch((err) => res.status(501).json({ err }));
}

export default {
  get(req, res) {
    find({ id: req.params.id }, res, ([food]) => {
      res.status(200).json(food);
    });
  },
  getAll(req, res) {
    find(null, res, (food) => {
      res.status(200).json(food);
    });
  },
  create: (req, res) => execute(
    models.MainCategory.create(req.category), res,
  ),
  update: (req, res) => execute(
    models.MainCategory.update(req.mainCategory, { where: { id: req.params.id } }), res,
  ),
  delete: (req, res) => execute(
    models.MainCategory.destroy({ where: { id: req.params.id } }), res,
  ),
};
