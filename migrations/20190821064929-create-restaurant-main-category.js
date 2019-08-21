
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RestaurantMainCategories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    restaurantId: {
      type: Sequelize.INTEGER,
    },
    mainCategoryId: {
      type: Sequelize.INTEGER,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('RestaurantMainCategories'),
};
