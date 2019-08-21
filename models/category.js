
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {});
  Category.associate = (models) => {
    Category.hasMany(models.Food, { as: 'foods' });
    Category.belongsToMany(models.Restaurant, { as: 'restaurants', through: 'RestaurantCategories', foreignKey: 'categoryId' });
  };
  return Category;
};
