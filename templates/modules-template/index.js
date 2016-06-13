const templateController = require('./template-controller');
const templateValidator = require('./template-validator');

module.exports = (server) => {
  server.route([
    {
      method: ['GET'],
      path: '/{id}',
      config: {
        validate: templateValidator.get,
        handler: templateController.get
      }
    },
    {
      method: ['POST'],
      path: '/',
      config: {
        validate: templateValidator.create,
        handler: templateController.create
      }
    }
  ]);
};
