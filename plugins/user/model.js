'use strict';

const userModel = {};

const users = [
    { id: 1, fName: 'Joker', lName: 'John Doe', age: 33 }
];

userModel.get = (id) => users.filter((m) => m.id === id).pop() || {};

userModel.create = (user) => {
    user.id = users.length + 1;
    users.push(user);
    return user.id;
};

module.exports = userModel;
