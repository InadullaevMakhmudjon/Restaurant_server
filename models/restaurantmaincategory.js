
module.exports = (sequelize, DataTypes) => {
  const RestaurantMainCategory = sequelize.define('RestaurantMainCategory', {
    restaurantId: DataTypes.INTEGER,
    mainCategoryId: DataTypes.INTEGER,
  }, {});
  RestaurantMainCategory.associate = () => {};
  return RestaurantMainCategory;
};
