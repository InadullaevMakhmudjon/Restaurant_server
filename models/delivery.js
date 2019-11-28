module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    address: DataTypes.STRING,
    clientName: DataTypes.STRING,
    clientPhone: DataTypes.STRING,
    comment: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE,
    approved: DataTypes.BOOLEAN,
    shipped: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
  }, {});
  Delivery.associate = (models) => {
    Delivery.hasMany(models.DeliveryFood, { as: 'foods' });
    Delivery.belongsTo(models.Restaurant, { as: 'restaurant' });
  };
  return Delivery;
};
