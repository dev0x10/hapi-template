'use strict';

const Hoek = require('hoek');
const Server = require('./server');
const Config = require('config');
const internals = {};

internals.manifest = {
    connections: [{
        port: Config.server.port,
        host: Config.server.host,
        labels: ['hapi'],
        routes: {
            cors: { origin: Config.server.allowOrigins }
        }
    }],
    registrations: [
        { plugin: 'vision' },
        { plugin: 'h2o2' },
        { plugin: 'inert' },
        { plugin: './plugins/user' }
    ]
};

internals.composeOptions = {
    relativeTo: __dirname
};

Server.init(internals.manifest, internals.composeOptions, (err, server) => {

    Hoek.assert(!err, err);
    const hapi = server.select('hapi');
    server.log('Web server started at: ' + hapi.info.uri);
});
