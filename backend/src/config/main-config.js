const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('./passport-config');

module.exports = {
    init(app) {
        app.use(cors());
        app.use(morgan('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(session({
            secret: 'secret',
            cookie: { maxAge: 60000 },
            resave: false,
            saveUninitialized: false
        }));
        passport.init(app);

        // I think this is for EJS so might not need it
        app.use((req, res, next) => {
            res.locals.currentUser = req.user;
            next();
        })
    }
}





