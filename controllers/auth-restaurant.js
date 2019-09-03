import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import models from '../models';

function find(where, res, next) {
  models.Restaurant.findAll({ where })
    .then((users) => {
      if (users.length) { next(users[0]); } else res.send(403);
    })
    .catch((errors) => res.status(501).json(errors));
}

export default {
  details(req, res) {
    find({ id: req.userId }, res, (user) => {
      res.status(200).json({ user });
    });
  },
  login(req, res) {
    find({ username: req.body.username }, res, (restaurant) => {
      if (compareSync(req.body.password, restaurant.password)) {
        sign({ userId: restaurant.id }, process.env.JWT_KEY, {}, (err, token) => {
          if (err) res.status(401).json({ error: err });
          res.status(200).json({ token });
        });
      } else {
        res.send(401);
      }
    });
  },
};
