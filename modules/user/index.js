const userController = require('./controller');
const userValidator = require('./validator');

module.exports = (server) => {
  server.route([
    {
      method: ['GET'],
      path: '/users/{id}',
      config: {
        validate: userValidator.get,
        handler: userController.get
      }
    },
    {
      method: ['POST'],
      path: '/users/',
      config: {
        validate: userValidator.create,
        handler: userController.create
      }
    }
  ]);
};
