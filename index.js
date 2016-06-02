'use strict';

const Hapi = require('hapi');
const Config = require('config');
const plugins = require('./plugins');
const server = new Hapi.Server();
const serverConfig = Config.get('server');
const router = require('./router');

server.connection({
  host: serverConfig.host,
  port: serverConfig.port,
  routes: {
    cors: {
      origin: serverConfig.allowOrigins
    }
  }
});

server.register(plugins, (err) => {

  if (err) {
    console.error(err);
    process.exit(1);
  }

  router.set(server);
  server.start(() => {
    console.info('Server running at: ' + server.info.uri);
  });

});

process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});
