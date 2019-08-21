
module.exports = (sequelize, DataTypes) => {
  const MainCategories = sequelize.define('MainCategory', {
    name: DataTypes.STRING,
  }, {});
  MainCategories.associate = (models) => {
    MainCategories.hasMany(models.Restaurant, { as: 'restaurants' });
  };
  return MainCategories;
};
