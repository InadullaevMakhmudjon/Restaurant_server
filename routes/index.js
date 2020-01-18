import home from './home';
import authUser from './auth-user';
import authRestaurant from './auth-restaurant';
import restaurants from './restaurants';
import food from './food';
import categories from './categories';
import mainCategories from './mainCategories';
import delivery, { withSocket as deliverySocket } from './delivery';
import types from './types';

export default (app) => {
  app.use('/api/', home);
  app.use('/api/auth/admin', authUser);
  app.use('/api/auth/restaurant', authRestaurant);
  app.use('/api/food', food);
  app.use('/api/categories', categories);
  app.use('/api/mainCategories', mainCategories);
  app.use('/api/deliveries', delivery);
  app.use('/api/types', types);
  app.use('/api/restaurants', restaurants);

  app.io.on('connection', (socket) => {
    console.log('Successfully connected new user');
    deliverySocket(socket);
  });
};
