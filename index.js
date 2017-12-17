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

        // loads plugin without options
        { plugin: 'h2o2' },

        // loads plugin with options
        {
            plugin: {
                register: './plugins/user',
                options: {
                    defaultUser: { id: '0', name: 'default' }
                }
            }
        }
    ]
};

internals.composeOptions = {
    relativeTo: __dirname
};

Server.init(internals.manifest, internals.composeOptions, (err, server) => {

    Hoek.assert(!err, err);
    const hapi = server.select('hapi');
    console.log('Web server started at: ' + hapi.info.uri);
});
