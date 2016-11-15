const modules = require('./modules');
const proxyServer = require('./proxy');
const router = {
  set: (server) => {
    modules.user.router(server);
    proxyServer(server);

    //index router
    server.route({path: '/', method: 'GET', handler: (request, reply) => reply('hapi template')});
  }
};

module.exports = router;
