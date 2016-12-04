'use strict';

const Joi = require('joi');
const commonUtil = {};

commonUtil.isValidObject = (objCompared, objSchema) => {
    const validator = Joi.validate(objCompared, objSchema);
    return validator.error === null;
};

module.exports = commonUtil;
