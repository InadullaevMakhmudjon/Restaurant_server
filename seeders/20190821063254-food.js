
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Food', [
    {
      id: 1,
      name: 'Hot dog',
      description: 'delicious',
      price: 8500,
      image: 'https://google.com',
      categoryId: 11,
      restaurantId: 1,
    },
    {
      id: 2,
      name: 'Burger',
      description: 'delicious',
      price: 90000,
      image: 'https://google.com',
      categoryId: 12,
      restaurantId: 1,
    },
    {
      id: 3,
      name: 'Hot dog',
      description: 'delicious',
      price: 8500,
      image: 'https://google.com',
      categoryId: 1,
      restaurantId: 2,
    },
    {
      id: 4,
      name: 'Burger',
      description: 'delicious',
      price: 90000,
      image: 'https://google.com',
      categoryId: 2,
      restaurantId: 2,
    },
  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('Food', null, {}),
};
