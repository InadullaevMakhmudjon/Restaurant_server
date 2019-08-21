
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('RestaurantCategories', [
    {
      restaurantId: 1,
      categoryId: 11,
    },
    {
      restaurantId: 1,
      categoryId: 12,
    },
    {
      restaurantId: 1,
      categoryId: 13,
    },
    {
      restaurantId: 1,
      categoryId: 14,
    },
    {
      restaurantId: 2,
      categoryId: 1,
    },
    {
      restaurantId: 2,
      categoryId: 2,
    },
    {
      restaurantId: 2,
      categoryId: 3,
    },
    {
      restaurantId: 2,
      categoryId: 4,
    },
    {
      restaurantId: 3,
      categoryId: 5,
    },
    {
      restaurantId: 3,
      categoryId: 6,
    },
    {
      restaurantId: 3,
      categoryId: 7,
    },
    {
      restaurantId: 3,
      categoryId: 8,
    },
  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('RestaurantCategories', null, {}),
};
