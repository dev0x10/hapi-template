'use strict';

const userModel = {};

const members = [
  { id: 1, fName: 'Joker', lName: 'John Doe', age: 33 }
];

userModel.get = (id) => members.filter((m) => m.id === id).pop() || {};

userModel.create = (user) => {
    user.id = members.length + 1;
    members.push(user);
    return user;
};

module.exports = userModel;
