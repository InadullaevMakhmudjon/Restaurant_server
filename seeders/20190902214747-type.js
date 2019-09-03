
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Types', [
    {
      id: 1,
      name: 'pieces',
    },
    {
      id: 2,
      name: 'kg',
    },
    {
      id: 3,
      name: 'liter',
    },
    {
      id: 4,
      name: 'cm',
    },
    {
      id: 5,
      name: 'porsiya',
    },
  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('Types', null, {}),
};
