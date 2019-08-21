import models from '../models';

function find(where, res, next) {
  models.Food.findAll({ where })
    .then((food) => next(food))
    .catch((err) => res.status(501).json(err));
}

function execute(promise, res) {
  promise.then(() => res.send(200))
    .catch((err) => res.status(501).json({ err }));
}

export default {
  get(req, res) {
    find({ id: req.params.id }, res, ([data]) => {
      res.status(200).json(data);
    });
  },
  getAll(req, res) {
    find(null, res, (data) => {
      res.status(200).json(data);
    });
  },
  create: (req, res) => execute(
    models.Food.create(req.food), res,
  ),
  update: (req, res) => execute(
    models.Food.update(req.food, { where: { id: req.params.id } }), res,
  ),
  delete: (req, res) => execute(
    models.Food.destroy({ where: { id: req.params.id } }), res,
  ),
};
