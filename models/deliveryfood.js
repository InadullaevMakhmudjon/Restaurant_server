
module.exports = (sequelize, DataTypes) => {
  const DeliveryFood = sequelize.define('DeliveryFood', {
    deliveryId: DataTypes.INTEGER,
    quantity: DataTypes.DOUBLE,
    foodId: DataTypes.INTEGER,
  }, {});
  DeliveryFood.associate = (models) => {
    DeliveryFood.belongsTo(models.Food, { as: 'food' });
    DeliveryFood.belongsTo(models.Delivery, { as: 'delivery' });
  };
  return DeliveryFood;
};
