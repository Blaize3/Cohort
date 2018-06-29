// import UsersController from '../controllers/UsersController';

export default (app) => {
  // default routes handlers
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to Cohort API services...'
    });
  });
};
