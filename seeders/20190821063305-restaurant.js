
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Restaurants', [
    {
      id: 1,
      name: '77 Street',
      description: 'На сегодняшний день Street77 является одним из ведущих заведений в сфере быстрого питания.',
      title: 'Доставка 39 р на заказ от 500 р',
      info: "bizning lvash eng zo'rlari",
      image: 'https://google.com/images/image/7',
    },
    {
      id: 2,
      name: 'Oq tepa lavash',
      description: 'Fast food Pizza Desert',
      title: 'Доставка 39 р на заказ от 500 р',
      info: "bizning lvash eng zo'rlari",
      image: 'https://google.com/images/image/7',
    },
    {
      id: 3,
      name: 'KFC',
      description: 'Kantucky fried chikens',
      title: 'Доставка 39 р на заказ от 500 р',
      info: "bizning lvash eng zo'rlari",
      image: 'https://google.com/images/image/7',
    },

  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('Restaurants', null, {}),
};
