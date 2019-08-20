import models from '../models';

function find(where, res, next) {
  models.findAll({ where })
    .then((data) => next(data))
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

  },
  delete(req, res) {

  },
};
