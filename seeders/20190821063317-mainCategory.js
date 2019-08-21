
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('MainCategories', [
    {
      id: 1,
      name: 'burger',
    },
  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('MainCategories', null, {}),
};
