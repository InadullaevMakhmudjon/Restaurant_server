const { hashSync } = require('bcrypt');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Restaurants', [
    {
      id: 1,
      username: 'r1',
      password: hashSync('r1', 10),
      name: '77 Street',
      description: 'На сегодняшний день Street77 является одним из ведущих заведений в сфере быстрого питания.',
      title: 'Доставка 39 р на заказ от 500 р',
      info: "bizning lvash eng zo'rlari",
      minPrice: 5500,
      image: 'https://google.com/images/image/7',
    },
    {
      id: 2,
      username: 'r2',
      password: hashSync('r2', 10),
      name: 'Oq tepa lavash',
      description: 'Fast food Pizza Desert',
      title: 'Доставка 39 р на заказ от 500 р',
      info: "bizning lvash eng zo'rlari",
      minPrice: 7800,
      image: 'https://google.com/images/image/7',
    },
    {
      id: 3,
      username: 'r3',
      password: hashSync('r3', 10),
      name: 'KFC',
      description: 'Kantucky fried chikens',
      title: 'Доставка 39 р на заказ от 500 р',
      info: "bizning lvash eng zo'rlari",
      minPrice: 9200,
      image: 'https://google.com/images/image/7',
    },

  ], {}),
  down: (queryInterface) => queryInterface.bulkDelete('Restaurants', null, {}),
};
