
module.exports = (sequelize, DataTypes) => {
  const MainCategories = sequelize.define('MainCategory', {
    name: DataTypes.STRING,
  }, {});
  MainCategories.associate = (models) => {
    MainCategories.belongsToMany(models.Restaurant, { as: 'restaurants', through: 'RestaurantMainCategories', foreignKey: 'mainCategoryId' });
  };
  return MainCategories;
};
