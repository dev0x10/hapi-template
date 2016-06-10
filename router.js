const userModule = require('./modules/user');
const proxyServer = require('./proxy');
const router = {
  set: (server) => {
    userModule(server);
    proxyServer(server);
  }
};

module.exports = router;
