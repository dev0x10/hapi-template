'use strict';

const internals = {};
const controller = require('./controller');
const validator = require('./validator');

module.exports = (server, options) => {

    //options can be used to pass property when loading this plugin
    //look on root folder index.js

    //server.dependency(['plugin to load before this plugin'], internals.after);
    server.dependency(['hapi-auth-cookie'], internals.after);
};

internals.after = (server, next) => {

    server.route([
        {
            method: 'POST',
            path: '/sample',
            config: {
                validate: validator.sample,
                handler: controller.sample
            }
        }
    ]);

    return next();
};

