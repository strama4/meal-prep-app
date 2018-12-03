const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const bcrypt = require('bcryptjs');

module.exports = {
    // checkJwt ({
    
    // })
    validatePassword(password, savedPassword) {
        return bcrypt.compareSync(password, savedPassword);
    }

}
