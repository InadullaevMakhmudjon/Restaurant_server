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
        model: models.DeliveryFood,
        as: 'foods',
        include: [
          {
            model: models.Food,
            as: 'food',
          },
        ],
      },
    ],
  }).then((data) => {
    data.forEach((item) => {
      item.foods.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        delete el.dataValues.DeliveryFood;
      });
    });
    next(data);
  })
    .catch((error) => res.status(500).json({ error }));
}

function execute(promise, res) {
  promise.then(() => res.send(200))
    .catch((errors) => res.status(500).json({ errors }));
}

export const withSocket = (socket) => {
  socket.on('delivery', (deliver) => {
    models.Delivery.create(deliver)
      .then((delivery) => {
        const objects = deliver.food.map(({ foodId, quantity }) => ({
          quantity,
          foodId,
          deliveryId: delivery.id,
        }));
        models.sequelize.getQueryInterface().bulkInsert('DeliveryFoods', objects, {})
          .then(() => {
            find(null, {}, (data) => socket.broadcast.emit('getAll', data));
          });
      });
  });
};

export default {
  getAll(req, res) {
    const where = req.userType === 2 ? { restaurantId: req.userId } : {};
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
  create: (req, res) => {
    models.Delivery.create(req.delivery)
      .then((delivery) => {
        const objects = req.delivery.food.map(({ foodId, quantity }) => ({
          quantity,
          foodId,
          deliveryId: delivery.id,
        }));
        models.sequelize.getQueryInterface().bulkInsert('DeliveryFoods', objects, {})
          .then(() => res.send(200))
          .catch((error) => res.status(501).json({ error }));
      })
      .catch((error) => res.status(501).json({ error }));
  },
  update: (req, res) => execute(
    models.Delivery.update(req.delivery, { where: { id: req.params.id } }), res,
  ),
  delete: (req, res) => execute(
    models.Delivery.destroy({ where: { id: req.params.id } }), res,
  ),
};
