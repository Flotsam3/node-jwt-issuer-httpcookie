const jsonwebtoken = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function jwtIssuer(user){
    const expiresIn = '1d';
    const payload = {
        sub: user._id,
        iat: Date.now()
    }

    const signedToken = jsonwebtoken.sign(payload, process.env.SECRET_KEY);

    return {
        signedToken,
        expiresIn
    };
};

module.exports = jwtIssuer;


