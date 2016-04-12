'use strict';

const Joi = require('joi');
const templateValidator = {};

templateValidator.get = {
  params: {
    id: Joi.string().required()
  }
};

templateValidator.create = {
  payload: {
    name: Joi.string().required(),
    email: Joi.email().optional()
  }
};

module.exports = templateValidator;
