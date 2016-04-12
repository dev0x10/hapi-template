'use strict';

const Joi = require('joi');
const commonUtil = {};

commonUtil.isValidObject = (objCompared, objSchema) => {
  let validator = Joi.validate(objCompared, objSchema);
  if (validator.error != null)  {
    return false;
  }

  return true;
};

module.exports = commonUtil;
