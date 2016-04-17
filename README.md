# Hapi JS Project Template
This is minimalistic Node.js project template using [HapiJS](http://hapijs.com).
The project is structured based on modules.

## Project structures:
### /config
Server config file inside here. This config folder file loaded using popular npm package [Config](https://github.com/lorenwest/node-config). Read the documentation for more details.

### /modules
Put your project module here. Each module consists of 4 files:
- index.js --> module router ([HapiJS route](http://hapijs.com/tutorials/routing))
- *-controller.js --> module controller
- *-model.js --> module model 
- *-validator.js --> router validator ([HapiJS route validation](http://hapijs.com/tutorials/validation))

### /plugins
You can put your own [HapiJS plugin](http://hapijs.com/tutorials/plugins) or 3rd party plugins and require it in **index.js**

### /proxy
Simple example of creating proxy on HapiJS

### /templates
Put your template files inside here. There is template modules inside it that can help you to create new module quickly by copy the template module folder into **/modules** and rename it as needed.

### /utils
You can put your utility file here, eg: db connection, logger, etc. 

## Code Style Checker:
There is **.jscsrc** file included. It's based on [AirBnB style](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json) with small changes.




