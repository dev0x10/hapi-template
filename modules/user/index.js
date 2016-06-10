const userController = require('./user-controller');
const userValidator = require('./user-validator');

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
