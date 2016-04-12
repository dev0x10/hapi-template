'use strict';

const templateController = require('./template-controller');
const templateValidator = require('./template-validator');

module.exports = (server) => {
  server.route([
    {
      method: ['GET'],
      path: '/{id}',
      config: {
        validate: templateController.get,
        handler: templateValidator.get
      }
    },
    {
      method: ['POST'],
      path: '/',
      config: {
        validate: templateController.create,
        handler: templateValidator.create
      }
    }
  ]);
};
