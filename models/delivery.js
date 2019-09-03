module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    address: DataTypes.STRING,
    clientName: DataTypes.STRING,
    clientPhone: DataTypes.STRING,
    comment: DataTypes.STRING,
    foodId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN,
    shipped: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
  }, {});
  Delivery.associate = (models) => {
    Delivery.belongsTo(models.Food, { as: 'food' });
    Delivery.belongsTo(models.Type, { as: 'type' });
    Delivery.belongsTo(models.Restaurant, { as: 'restaurant' });
  };
  return Delivery;
};
