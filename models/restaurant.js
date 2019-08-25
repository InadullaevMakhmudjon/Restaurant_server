
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    info: DataTypes.STRING,
    minPrice: DataTypes.DOUBLE,
    image: DataTypes.STRING,
  }, {});
  Restaurant.associate = (models) => {
    Restaurant.belongsToMany(models.MainCategory, { as: 'restaurantCategories', through: 'RestaurantMainCategories', foreignKey: 'restaurantId' });
    Restaurant.belongsToMany(models.Category, { as: 'categories', through: 'RestaurantCategories', foreignKey: 'restaurantId' });
  };
  return Restaurant;
};
