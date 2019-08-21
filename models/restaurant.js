
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    info: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {});
  Restaurant.associate = (models) => {
    Restaurant.belongsToMany(models.MainCategory, { as: 'restaurantCategory', through: 'RestaurantMainCategory', foreignKey: 'restaurantId' });
    Restaurant.belongsToMany(models.Category, { as: 'categories', through: 'RestaurantCategory', foreignKey: 'restaurantId' });
  };
  return Restaurant;
};
