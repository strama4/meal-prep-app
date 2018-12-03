const User = require('../db/models').User;

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authHelper = require('../auth/helper');

module.exports = {
    init(app) {
        app.use(passport.initialize());
        app.use(passport.session());

        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        }, 
        function(username, password, done) {
            User.findOne({ username: username }, (err, user) => {
                if (err) return done(err);
                if (!user) {
                    return done(null, false, { message: 'Incorrect username' });
                }
                if (authHelper.validatePassword(password)) {
                    return done(null, false, { message: 'Incorrect password' });
                }
                return done(null, user);
            });
        }));

        // not sure if this part is necessary for now...
    
        passport.serializeUser((user, callback) => {
            callback(null, user.id);
        })
    
        passport.deserializeUser((id, callback) => {
            User.findByPk(id)
            .then((user) => {
                callback(null, user);
            })
            .catch((err) => {
                callback(err, user);
            })
        })
    }
}