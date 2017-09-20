'use strict';

const router = require('./router');

exports.register = (server, options, next) => {

    router(server, options);

    return next();
};

exports.register.attributes = {
    name: 'pluginName',
    version: '1.0'
};


