
module.exports = (sequelize, DataTypes) => {
  const DeliveryFood = sequelize.define('DeliveryFood', {
    deliveryId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
  }, {});
  DeliveryFood.associate = () => {};
  return DeliveryFood;
};
