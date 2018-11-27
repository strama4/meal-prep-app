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
});