'use strict';

const Joi = require('joi');
const validator = {};

validator.sample = {
    payload: {
        name: Joi.string().required()
    }
};

module.exports = validator;
