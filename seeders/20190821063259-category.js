
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Categories', [
    {
      id: 1,
      name: 'Fast food',
    },
    {
      id: 2,
      name: 'Национальные',
    },
    {
      id: 3,
      name: 'Суши',
    },
    {
      id: 4,
      name: 'Десерт',
    },
    {
      id: 5,
      name: 'Пиццерия',
    },
    {
      id: 6,
      name: 'Стейки',
    },
    {
      id: 7,
      name: 'Здоровье',
    },
    {
      id: 8,
      name: 'Барбекю',
    },
    {
      id: 9,
      name: 'Шашлык',
    },
    {
      id: 10,
      name: 'Для детей',
    },
    {
      id: 11,
      name: 'Кола',
    },
    {
      id: 12,
      name: 'Оливье',
    },
    {
      id: 13,
      name: 'Супы',
    },
    {
      id: 14,
      name: 'Десерты',
    },
  ],
  {}),
  down: (queryInterface) => queryInterface.bulkDelete('Categories', null, {}),
};
