module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define('Delivery', {
    address: DataTypes.STRING,
    clientName: DataTypes.STRING,
    clientPhone: DataTypes.STRING,
    comment: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
    lat: DataTypes.DOUBLE,
    long: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    approved: DataTypes.BOOLEAN,
    shipped: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
  }, {});
  Delivery.associate = (models) => {
    Delivery.belongsToMany(models.Food, { as: 'foods', through: 'DeliveryFood', foreignKey: 'deliveryId' });
    Delivery.belongsTo(models.Restaurant, { as: 'restaurant' });
  };
  return Delivery;
};
