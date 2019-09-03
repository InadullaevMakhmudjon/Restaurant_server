import home from './home';
import authUser from './auth-user';
import authRestaurant from './auth-restaurant';
import restaurants from './restaurants';
import food from './food';
import categories from './categories';
import mainCategories from './mainCategories';
import delivery from './delivery';
import types from './types';

export default (app) => {
  app.use('/api/', home);
  app.use('/api/auth/admin', authUser);
  app.use('/api/auth/restaurant', authRestaurant);
  app.use('/api/restaurants', restaurants);
  app.use('/api/food', food);
  app.use('/api/categories', categories);
  app.use('/api/mainCategories', mainCategories);
  app.use('/api/deliveries', delivery);
  app.use('/api/types', types);
};
