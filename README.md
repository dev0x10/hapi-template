# Hapi JS Project Template
This is minimalistic Node.js project template using [HapiJS](http://hapijs.com).

## Project structures:
### /config
Server config file inside here. This config folder file loaded using [Config module](https://github.com/lorenwest/node-config).
Read its documentation for more details.

### /plugins
Put [HapiJS plugin](http://hapijs.com/tutorials/plugins) here and require it in **index.js**
In this template, plugin consists of 6 files:
- index.js
- controller.js
- model.js 
- router.js --> plugin router ([HapiJS route](http://hapijs.com/tutorials/routing))
- validator.js --> router validator ([HapiJS route validation](http://hapijs.com/tutorials/validation))
- pre-handler.js --> method for processing request before it reaches the controller [HapiJS pre-handler](https://hapijs.com/api/16.6.2#route-prerequisites)

### /proxy
Simple example of creating proxy on HapiJS and [H2o2](https://github.com/hapijs/h2o2)

### /templates
Put your template files inside here. There is a plugin template inside it.

### /utils
You can put your utility file here, eg: db connection, logger, etc. 

## Code Style Checker:
There is **.eslintrc** file included.




