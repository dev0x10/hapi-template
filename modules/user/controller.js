const Boom = require('boom');
const userModel = require('./model');
const userController = {};

userController.get = (request, reply) => reply(userModel.get(request.params.id));

userController.create = (request, reply) => {
  if (userModel.create(request.payload)) {
    reply(201);
  } else {
    reply(new Boom.badData());
  }
};

module.exports = userController;
