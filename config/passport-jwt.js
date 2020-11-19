const {Strategy} = require('passport-jwt');
const dotenv = require('dotenv');
const User = require('../UserModel');

dotenv.config();

const jwtStrategy = new Strategy({jwtFromRequest: (req)=>req.cookies.jwt, secretOrKey: process.env.SECRET_KEY},
async (payload, done)=>{
    const user = await User.findById(payload.sub);
    if(user === null) {
        return done('User not found', false)
    }
    return done(null, user);
});

module.exports = jwtStrategy;

// passport.use(new JwtCookieComboStrategy({
//     secretOrPublicKey: 'StRoNGs3crE7'
// }, async (payload, done) => {
//     return done(null, payload);
//     // payload
//     // payload = { sub: '1283913893', issuedAt: 11231839389 }
//     // internally
//     // request.user = payload;
// }));