import home from './home';
import auth from './auth';
import restaurants from './restaurants';

export default (app) => {
  app.use('/api/', home);
  app.use('/api/auth', auth);
  app.use('/api/restaurants', restaurants);
};
