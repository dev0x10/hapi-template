'use strict';

global.Promise = require('bluebird');
const Glue = require('glue');
const Util = require('util');

exports.init = (manifest, options, next) => {

    Glue.compose(manifest, options, (err, server) => {

        if (err) {
            return next(err);
        }

        server.on('request-error', (request, err) => {
            const logData = {
                reqId: request.id,
                ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
                userAgent: request.headers['user-agent'],
                reqPath: request.path,
                error: err
            };
            console.error('onRequestError', logData);
        });

        server.ext('onPreHandler', (request, reply) => {

            const logData = {
                reqId: request.id,
                ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
                userAgent: request.headers['user-agent'],
                reqPath: request.path,
                reqData: { query: request.query, params: request.params, payload: request.payload }
            };
            console.log('onPreHandler', logData);
            return reply.continue();
        });

        server.on('response', (request) => {

            try {
                const responseData = JSON.stringify(Util.inspect(request.response.source));
                const logData = {
                    reqId: request.id,
                    ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
                    userAgent: request.headers['user-agent'],
                    reqPath: request.path,
                    resData: responseData
                };
                console.log('onResponse', logData);
            }
            catch (e) {
                console.error('Server on response cannot parse output', e);
            }
        });

        server.on('log', (event, tags) => {
            console.log(tags);
        });

        server.start((err) => {
            return next(err, server);
        });

    });

};

