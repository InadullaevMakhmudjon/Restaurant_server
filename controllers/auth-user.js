import { sign } from 'jsonwebtoken';
import { compareSync } from 'bcrypt';
import models from '../models';

function find(where, attributes, res, next) {
  models.User.findAll({ where, attributes })
    .then((users) => {
      if (users.length) { next(users[0]); } else res.send(404);
    })
    .catch((errors) => res.status(501).json(errors));
}

export default {
  details(req, res) {
    find({ id: req.userId }, ['name', 'username', 'createdAt'], res, (user) => {
      res.status(200).json({ user });
    });
  },
  login(req, res) {
    find({ username: req.body.username }, ['id', 'password'], res, (user) => {
      if (compareSync(req.body.password, user.password)) {
        sign({ userId: user.id, type: 1 }, process.env.JWT_KEY, {}, (err, token) => {
          res.status(200).json({ token });
        });
      } else {
        res.send(401);
      }
    });
  },
  registration(req, res) {
    new Promise((resolve, reject) => {
      models.User.findAll({ where: { username: req.user.username } })
        .then((users) => {
          if (users.length) { reject(); } else { resolve(); }
        })
        .catch((err) => reject(err));
    }).then(() => {
      models.User.create(req.user)
        .then(() => res.send(200))
        .catch((err) => res.status(501).json({ err }));
    })
      .catch((err) => {
        if (err) {
          res.status(501).json({ err });
        } else {
          res.send(409);
        }
      });
  },
};
