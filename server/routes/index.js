import UsersController from '../controllers/UsersController';

export default (app) => {
  // default routes handlers
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Cohort API services...'
    });
  });

  app.get('/api/v1/users', UsersController.getAllUsers);

  app.post('/api/v1/users/signup', UsersController.signup);

  app.post('/api/v1/users/signin', UsersController.signin);
};
