const Joi = require('joi');
const commonUtil = require('../../utils/common-util');
const userModel = {};

userModel.members = [
  {id: 1, fName: 'Joker', lName: 'Breaker', age: 33}
];

userModel.get = (id) => userModel.members.map((m) => {
  if (m.id == id) {
    return m;
  }

  return {};
}).pop();

userModel.create = (user) => {

  let newUserObj = {
    fName: Joi.string(),
    lName: Joi.string(),
    age: Joi.number().positive()
  };

  if (commonUtil.isValidObject(user, newUserObj)) {
    user.id = userModel.members.length + 1;
    this.members.push(user);
    return true;
  } else {
    return false;
  }
};

module.exports = userModel;
