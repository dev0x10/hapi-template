const Joi = require('joi');
const commonUtil = require('../../utils/common-util');
const userModel = {};

userModel.members = [
  {id: 1, fName: 'Joker', lName: 'Breaker', age: 33}
];

userModel.get = (id) => userModel.members.filter((m) => m.id === id).pop() || {};

userModel.create = (user) => {
  let newUserObj = {
    fName: Joi.string().required(),
    lName: Joi.string().required(),
    age: Joi.number().positive()
  };

  if (!commonUtil.isValidObject(user, newUserObj)) {
    return {};
  }
  user.id = userModel.members.length + 1;
  this.members.push(user);
  return user;
};

module.exports = userModel;
