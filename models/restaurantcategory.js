
module.exports = (sequelize, DataTypes) => {
  const RestaurantCategory = sequelize.define('RestaurantCategory', {
    restaurantId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {});
  RestaurantCategory.associate = () => {};
  return RestaurantCategory;
};
