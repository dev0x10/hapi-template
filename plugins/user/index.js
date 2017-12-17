'use strict';

const router = require('./router');

exports.register = (server, options, next) => {
    // passed options when loading plugin available here
    // it can be passed to router as well
    router(server, options);
    return next();
};

exports.register.attributes = {
    name: 'users',
    version: '1.0'
};
