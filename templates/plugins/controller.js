'use strict';

const controller = {};

controller.sample = (request, reply) => {

    const sampleData = request.pre.getSampleData;

    reply(sampleData);
};

module.exports = controller;
