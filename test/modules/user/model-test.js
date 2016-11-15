const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const suite = lab.suite;
const test = lab.test;
const expect = Code.expect;
const userModel = require('../../../modules').user.model;

suite('user model test', () => {
  test('get by id', (done) => {
    const user = userModel.get(1);
    expect(user.id).to.equal(1);
    done();
  });

  test('create user', (done) => {
    const newUser = {fName: 'firstName', lName: 'lastName', age: 30};
    const res = userModel.create(newUser);
    expect(res.age).to.equal(newUser.age);
    done();
  });
});

