
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('RestaurantMainCategories', [
    {
      restaurantId: 1,
      mainCategoryId: 1,
    },
    {
      restaurantId: 2,
      mainCategoryId: 1,
    },
    {
      restaurantId: 3,
      mainCategoryId: 1,
    },
  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('RestaurantMainCategories', null, {}),
};
