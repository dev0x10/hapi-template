'use strict';

const userController = require('./controller');
const userValidator = require('./validator');
const preHandler = require('./pre-handler');
const internals = {};

module.exports = (server, options) => {
    // passed options when loading plugin available here
    // uncomment to see the content
    // console.log(options);

    server.dependency([], internals.after);
};

internals.after = (server, next) => {

    server.route([
        {
            method: ['GET'],
            path: '/users/{id}',
            config: {
                validate: userValidator.get,
                handler: userController.get
            }
        },
        {
            method: ['POST'],
            path: '/users',
            config: {
                //
                pre: [
                    { method: preHandler.checkUserExistence }
                ],
                validate: userValidator.create,
                handler: userController.create
            }
        }
    ]);

    return next();
};



