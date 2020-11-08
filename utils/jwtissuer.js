const jsonwebtoken = require('jsonwebtoken');

function jwtIssuer(user){
    const expiresIn = '1d';
    const payload = {
        sub: '100143jgegj0rdd447611',
        iat: Date.now()
    }

    const signedToken = jsonwebtoken.sign(payload, '1030egjekergß34ßt3');

    return {
        token: 'Bearer',
        signedToken,
        expiresIn
    };
};

module.exports = jwtIssuer;


