exports.register = (server, options, next) => {

  'use strict';

  //Write your plugin functions here
  //Ref: https://hapi.js/api#/plugins

  return next();
};

exports.register.attributes = {
  name: 'plugin-template',
  version: '0.1'
};
