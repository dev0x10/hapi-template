const userModule = require('./modules/user');
const proxyServer = require('./proxy');
const router = {
  set: (server) => {
    userModule(server);
    proxyServer(server);

    //index router
    server.route({path: '/', method: 'GET', handler: (request, reply) => reply('hapi template')});
  }
};

module.exports = router;
