'use strict';

global.Promise = require('bluebird');
const Glue = require('glue');
const Util = require('util');

// modify this using your own logger
const logger = (type = 'log', data = '') => {

    if (process.env.NODE_ENV === 'prod') {
        console[type](data);
    }

};


exports.init = (manifest, options, next) => {

    Glue.compose(manifest, options, (err, server) => {

        if (err) {
            return next(err);
        }

        server.on('request-error', (request, err) => {
            const logData = {
                event: 'onRequestError',
                reqId: request.id,
                ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
                userAgent: request.headers['user-agent'],
                reqPath: request.path,
                error: err
            };
            logger('log', logData);
        });

        server.ext('onPreHandler', (request, reply) => {

            const logData = {
                event: 'onPreHandler',
                reqId: request.id,
                ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
                userAgent: request.headers['user-agent'],
                reqPath: request.path,
                reqData: { query: request.query, params: request.params, payload: request.payload }
            };
            logger('log', logData);
            return reply.continue();
        });

        server.on('response', (request) => {

            try {
                const responseData = JSON.stringify(Util.inspect(request.response.source));
                const logData = {
                    event: 'onResponse',
                    reqId: request.id,
                    ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
                    userAgent: request.headers['user-agent'],
                    reqPath: request.path,
                    resData: responseData
                };
                logger('log', logData);
            }
            catch (e) {
                logger('error', 'Server on response cannot parse output');
            }
        });

        server.start((err) => {
            return next(err, server);
        });

    });

};

