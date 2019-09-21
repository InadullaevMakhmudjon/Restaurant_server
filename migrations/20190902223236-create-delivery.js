
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Deliveries', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    address: {
      type: Sequelize.STRING,
    },
    clientName: {
      type: Sequelize.STRING,
    },
    clientPhone: {
      type: Sequelize.STRING,
    },
    comment: {
      type: Sequelize.STRING,
    },
    restaurantId: {
      type: Sequelize.INTEGER,
    },
    lat: {
      type: Sequelize.DOUBLE,
    },
    long: {
      type: Sequelize.DOUBLE,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    approved: {
      type: Sequelize.BOOLEAN,
    },
    shipped: {
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Deliveries'),
};
