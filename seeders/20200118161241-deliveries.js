
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Deliveries', [
    {
      id: 1,
      address: 'Tashkent',
      clientName: 'Makhmudjon',
      clientPhone: '+998994287668',
      comment: 'This is awesome food',
      restaurantId: 1,
      lat: 63.1,
      long: 62.43,
      approved: 0,
      shipped: 0,
      createdAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Deliveries', null, {}),
};
