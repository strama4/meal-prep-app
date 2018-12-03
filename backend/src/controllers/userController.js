const userQueries = require('../db/queries.user');

module.exports = {
    signIn(req, res, next) {
        res.redirect('/');
    },

    signUp(req, res, next) {
        const newUser = {
            email: req.body.email,
            password: req.body.password
        }
        userQueries.createUser(newUser, (err, user) => {
            if (err) {
                // send something to the front end?
            } else {
                // send something else to front end
            }
        })
    }
}