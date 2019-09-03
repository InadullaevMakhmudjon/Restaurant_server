
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Restaurants', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
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
    minPrice: {
      type: Sequelize.DOUBLE,
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
