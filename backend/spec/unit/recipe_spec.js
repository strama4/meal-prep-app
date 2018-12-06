const sequelize = require('../../src/db/models/index').sequelize;
const Recipe = require('../../src/db/models').Recipe;

describe('Recipe', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        });
    });

    describe('#create', () => {
        it('should create a new Recipe object', (done) => {
            Recipe.create({
                title: 'Chili Garlic Tofu',
                ingredients: [
                    {
                        item: 'Tofu',
                        qty: 2,
                        measurement: 'blocks'
                    } , {
                        item: 'Rice',
                        qty: 2,
                        measurement: 'cups'
                    }
                ]
            })
            .then((recipe) => {
                expect(recipe.title).toBe('Chili Garlic Tofu');
                expect(recipe.ingredients).not.toBeUndefined();
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });

        it('should not create an object that is missing a field', (done) => {
            Recipe.create({
                title: 'Vegan Pizza'
            })
            .then((recipe) => {
                done();
            })
            .catch((err) => {
                expect(err).not.toBeNull();
                done();
            });
        });
    });
});