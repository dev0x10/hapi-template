'use strict';

const preHandler = {};
const Boom = require('boom');

preHandler.getSampleData = (request, reply) => {

    const sampleData = {id: 0, name: 'sample data'};
    reply(sampleData);
};

module.exports = preHandler;