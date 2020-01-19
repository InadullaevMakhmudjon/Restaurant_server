
const { hashSync } = require('bcryptjs');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Users', [
    {
      name: 'Admin',
      username: 'admin',
      password: hashSync('admin', 10),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
