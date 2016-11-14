const controller = require('./controller');
const validator = require('./validator');

module.exports = (server) => {
  server.route([
    {
      method: ['GET'],
      path: '/{id}',
      config: {
        validate: validator.get,
        handler: controller.get
      }
    },
    {
      method: ['POST'],
      path: '/',
      config: {
        validate: validator.create,
        handler: controller.create
      }
    }
  ]);
};
