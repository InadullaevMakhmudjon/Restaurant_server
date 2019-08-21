import home from './home';
import auth from './auth';
import restaurants from './restaurants';
import foods from './foods';

export default (app) => {
  app.use('/api/', home);
  app.use('/api/auth', auth);
  app.use('/api/restaurants', restaurants);
  app.use('/api/foods', foods);
};
