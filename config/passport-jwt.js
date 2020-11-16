const {Strategy} = require('passport-jwt');
const dotenv = require('dotenv');
const jwtIssuer = require('../utils/jwtissuer');

dotenv.config();

const jwtStrategie = new Strategy({jwtFromRequest: (req)=>req.cookies.jwt, secretOrKey: process.env.SECRET_KEY},
(payload, done)=>{
    return done(null, payload.sub);
});

module.exports = jwtStrategie;

// passport.use(new JwtCookieComboStrategy({
//     secretOrPublicKey: 'StRoNGs3crE7'
// }, async (payload, done) => {
//     return done(null, payload);
//     // payload
//     // payload = { sub: '1283913893', issuedAt: 11231839389 }
//     // internally
//     // request.user = payload;
// }));