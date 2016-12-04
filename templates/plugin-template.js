exports.register = (server, options, next) => {

  //Write your plugin functions here
  //Ref: https://hapi.js/api#/plugins

    return next();
};

exports.register.attributes = {
    name: 'plugin-name',
    version: '0.1'
};
