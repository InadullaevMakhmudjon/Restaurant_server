import home from './home';
import auth from './auth';
import restaurants from './restaurants';
import food from './food';
import categories from './categories';

export default (app) => {
  app.use('/api/', home);
  app.use('/api/auth', auth);
  app.use('/api/restaurants', restaurants);
  app.use('/api/food', food);
  app.use('/api/categories', categories);
};
