'use strict';

const userModule = require('./modules/user');
const router = {
  set: (server) => {
    userModule(server);
  }
};

module.exports = router;
