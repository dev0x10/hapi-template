'use strict';

const router = require('./router');

exports.register = (server, options, next) => {
    router(server);
    return next();
};

exports.register.attributes = {
    name: 'users',
    version: '1.0'
};