import models from '../models';

function find(where, res, next) {
  models.Restaurant.findAll({ where })
    .then((data) => next(data))
    .catch((err) => res.status(501).json({ err }));
}

function execute(promises, res) {
  Promise.all(promises)
    .then(() => res.send(200))
    .catch((err) => res.status(501).json({ err }));
}

export default {
  getAll(req, res) {
    find(null, res, (data) => {
      res.status(200).json(data);
    });
  },
  get(req, res) {
    find({ id: req.params.id }, res, ([data]) => {
      res.status(200).json(data);
    });
  },
  create(req, res) {
    execute(
      models.Restaurant.create(req.restaurant),
      res,
    );
  },
  delete(req, res) {
    execute(
      models.Restaurant.destroy({ id: req.body.id }),
      res,
    );
  },
};
