'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const test = lab.test;
const expect = Code.expect;
const Path = require('path');
const Server = require('../../server');
const internals = {};

describe('User.controller', () => {

    test('Get user by id should returns user object', (done) => {

        Server.init(internals.manifest, internals.composeOptions, (err, server) => {

            const userTest = server.select('userTest');
            const request = {
                url: '/users/1',
                method: 'GET'
            };
            userTest.inject(request, (res) => {

                expect(res.result.id).to.equal(1);
                server.stop(done);
            });
        });

    });

    test('Get user by wrong id should returns empty object', (done) => {

        Server.init(internals.manifest, internals.composeOptions, (err, server) => {

            const userTest = server.select('userTest');
            const request = {
                url: '/users/1000',
                method: 'GET'
            };
            userTest.inject(request, (res) => {
                expect(res.result.id).to.not.exist();
                server.stop(done);
            });
        });
    });

    test('Get user by string id should returns bad request', (done) => {

        Server.init(internals.manifest, internals.composeOptions, (err, server) => {

            const userTest = server.select('userTest');
            const request = {
                url: '/users/string',
                method: 'GET'
            };
            userTest.inject(request, (res) => {
                expect(res.statusCode).to.equal(400);
                server.stop(done);
            });
        });
    });

    // more test...
});

internals.manifest = {
    connections: [
        {
            host: 'localhost',
            port: 0,
            labels: ['userTest']
        }
    ],
    registrations: [
        {
            plugin: {
                register: './plugins/user',
                options: {
                    defaultUser: { id: '0', name: 'default' }
                }
            }
        }
    ]
};

internals.composeOptions = {
    relativeTo: Path.resolve(__dirname, '../../')
};
