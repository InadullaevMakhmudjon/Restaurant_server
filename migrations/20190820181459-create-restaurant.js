
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Restaurants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    info: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Restaurants'),
};
