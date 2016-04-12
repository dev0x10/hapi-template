'use strict';

const userController = require('./user-controller');
const userValidator = require('./user-validator');

module.exports = (server) => {
  server.route([
    {
      method: ['GET'],
      path: '/{id}',
      config: {
        validate: userValidator.get,
        handler: userController.get
      }
    },
    {
      method: ['POST'],
      path: '/',
      config: {
        validate: userValidator.create,
        handler: userController.create
      }
    }
  ]);
};
