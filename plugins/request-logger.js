exports.register = (server, options, next) => {

  //INFO: replace the console log with your logger
  'use strict';

  server.on('request-error', (request, err) => {

    var logData = {
      reqId: request.id,
      ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
      userAgent: request.headers['user-agent'],
      reqPath: request.path,
      error: err
    };
    console.log('onRequestError', logData);

  });

  server.ext('onPreHandler', (request, reply) => {

    let logData = {
      reqId: request.id,
      ip: request.headers['x-forwarded-for'] || request.info.remoteAddress,
      userAgent: request.headers['user-agent'],
      reqPath: request.path,
      reqData: {query: request.query, params: request.params, payload: request.payload}
    };
    console.log('onPreHandler', logData);

    return reply.continue();

  });

  server.on('response', (request) => {
    var responseData = {};

    try {
      responseData = JSON.stringify(request.response.source);
      let logData = {
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

  return next();
};

exports.register.attributes = {
  name: 'request-logger',
  version: '1.0'
};
