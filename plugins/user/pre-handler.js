'use strict';

const preHandler = {};
const Boom = require('boom');

preHandler.checkUserExistence = (request, reply) => {

    const payload = request.payload;
    if (payload.fName === 'fName' && payload.lName === 'lName') {
        return reply(Boom.badRequest('User already exist'));
    }
    reply();
};

module.exports = preHandler;