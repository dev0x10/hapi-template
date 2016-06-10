const proxyHandler = require('./handler');

module.exports = (server) => {

  server.route([
    {
      method: ['*'], path: '/proxy/{path*}',
      config: {
        handler: {proxy: proxyHandler}
      }
    }
  ]);

};
