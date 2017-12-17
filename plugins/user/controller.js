'use strict';

const Boom = require('boom');
const userModel = require('./model');
const userController = {};

userController.get = (request, reply) => reply(userModel.get(request.params.id));

userController.create = (request, reply) => {
    const userId = userModel.create(request.payload);
    reply(userId);
};

module.exports = userController;
