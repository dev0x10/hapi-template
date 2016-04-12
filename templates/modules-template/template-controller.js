'use strict';

const Boom = require('boom');
const templateModel = require('./template-model');
const templateController = {};

templateController.get = (request, reply) => 'Hello World';

templateController.create = (request, reply) => reply(new Boom.badData());

module.exports = templateController;
