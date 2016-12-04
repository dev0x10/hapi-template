'use strict';

const Wreck = require('wreck');
const proxyHandler = {};

//INFO: here you can do something about the request uri
//eg: adding params, edit params value, etc
proxyHandler.mapUri = (request, callback) => {

    //ref: http://jsonplaceholder.typicode.com/
    const proxyAddress = 'http://jsonplaceholder.typicode.com';

    //remove 'proxy' from the request path
    const rawPath = request.raw.req.url.replace('/proxy', '');
    const uri = proxyAddress + rawPath;

    callback(null, uri);

    //INFO: if you need to reject this request
    //maybe some request should not pass the proxy, you can simply return Boom object
    //callback(new Boom.badRequest('request not allowed'));
};

proxyHandler.onResponse = (err, res, request, reply) => {
    if (err) {
        return reply({}).header('Content-Type', 'application/json');
    }

    Wreck.read(res, { json: true }, (err, payload) => {
        reply(payload);
    });
};

module.exports = proxyHandler;
