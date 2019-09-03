import models from '../models';

function find(where, res, next) {
  models.Type.findAll({ where })
    .then((types) => next(types))
    .catch((err) => res.status(500).json(err));
}

export default {
  getAll(req, res) {
    find(null, res, (types) => res.status(200).json(types));
  },
  get(req, res) {
    find({ id: req.params.id }, res, ([type]) => res.status(200).json(type));
  },
};
