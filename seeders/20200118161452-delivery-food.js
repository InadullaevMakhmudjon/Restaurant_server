
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('DeliveryFoods', [
    {
      deliveryId: 1,
      quantity: 5,
      foodId: 1,
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('DeliveryFoods', null, {}),
};
