const sequelize = require('../../src/db/models/index').sequelize;

const User = require('../../src/db/models').User;

describe('User', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true })
        .then(() => {
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        });
    });

    describe('#createUser', () => {
        it('should create a new User object with given attributes', (done) => {
            User.create({
                email: 'johnnyboy@gmail.com',
                password: '123456789',
                firstName: 'Johnny',
                lastName: 'Boyyo'
            })
            .then((user) => {
                expect(user).not.toBeNull();
                expect(user.email).toBe('johnnyboy@gmail.com');
                done(); 
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });

        it('should not create a user that an invalid field', (done) => {
            User.create({
                email: 'billybobatgmail.com',
                password: '123456'
            })
            .then((user) => {
                done();
            })
            .catch((err) => {
                expect(err).not.toBeNull();
                expect(err.message).toContain('firstName cannot be null');
                done();
            });
        });
    });
});