'use strict';

const Joi = require('joi');
const userValidator = {};

userValidator.get = {
  params: {
    id: Joi.number().positive()
  }
};

userValidator.create = {
  payload: Joi.object({
    fName: Joi.string().required(),
    lName: Joi.string().required(),
    age: Joi.number().positive().required()
  })
};

module.exports = userValidator;
