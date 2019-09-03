import models from '../models';

function find(where, res, next) {
  models.Delivery.findAll({
    where,
    include: [
      {
        model: models.Restaurant,
        as: 'restaurant',
        attributes: ['id', 'name', 'image'],
      },
      {
        model: models.Food,
        as: 'food',
        attributes: ['id', 'name', 'price', 'image'],
      },
      {
        model: models.Type,
        as: 'type',
      },
    ],
  }).then((data) => next(data))
    .catch((error) => res.status(500).json({ error }));
}

function execute(promise, res) {
  promise.then(() => res.send(200))
    .catch((errors) => res.status(500).json({ errors }));
}

export default {
  getAll(req, res) {
    const where = { restaurantId: req.userId };
    if (Object.keys(req.query).length) {
      Object.keys(req.query).forEach((key) => {
        where[key] = req.query[key];
      });
    }
    find(where, res, (data) => res.status(201).json(data));
  },
  get(req, res) {
    find({ id: req.params.id }, res, ([data]) => res.status(201).json(data));
  },
  approve: (req, res) => execute(
    models.Delivery.update({ approved: true }, { where: { id: req.params.id } }), res,
  ),
  shipped: (req, res) => execute(
    models.Delivery.update({ shipped: true }, { where: { id: req.params.id } }), res,
  ),
  create: (req, res) => execute(
    models.Delivery.create(req.delivery), res,
  ),
  update: (req, res) => execute(
    models.Delivery.update(req.delivery, { where: { id: req.params.id } }), res,
  ),
  delete: (req, res) => execute(
    models.Delivery.destroy({ where: { id: req.params.id } }), res,
  ),
};
