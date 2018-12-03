const sequelize = require('../../src/db/models/index').sequelize;
const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/users';

const User = require('../../src/db/models').User;

describe('routes : users', () => {
    beforeEach((done) => {
        this.user;

        sequelize.sync({ force: true }).then(() => {
            User.create({
                email: 'johnnyboy@gmail.com',
                password: '123456789',
                firstName: 'Johhny',
                lastName: 'Boyyo'
            })
            .then((user) => {
                this.user = user;
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });
    });

    describe('GET /users/sign_in', () => {
        it('should render the sign in page', (done) => {
            request.get(`${base}/sign_in`, (err, res, body) => {
                expect(body).toContain('Not registered?');
                done();
            });
        });
    });
});