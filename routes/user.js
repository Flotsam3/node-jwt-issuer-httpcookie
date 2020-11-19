express = require('express');
const router = express.Router();
const User = require('../UserModel');
const bcrypt = require('bcrypt');
const jwtIssuer = require('../utils/jwtissuer');

router.post('/register', (req, res)=>{

    console.log(req.body.email)

    User.findOne({ email: req.body.email }).then((user) => {
        if(user !== null) {
            res.status(401).send('User already exists');
        } else {
            generateHash(req.body.hash);

            async function generateHash(password){
                const salt = await bcrypt.genSalt(10);
                const hashedPass = await bcrypt.hash(password, salt);
                
                User.create({
                    name: req.body.name,
                    email: req.body.email,
                    hash: hashedPass
                }).then(() => {
                    res.status(200).send('New user successfully created!')
                });
            }
        }
    });
});

router.post('/login', (req, res)=>{
    User.findOne({email: req.body.email}).then((user)=>{
        if (user === null){
            res.status(404).send('No such user!');
        } else {
            bcrypt.compare(req.body.hash, user.hash, (err, valid)=>{
                if (err) throw err;
                
                if (valid){
                    res.status(200).cookie('jwt', jwtIssuer(user).signedToken, 
                    {httpOnly: true, sameSite: 'lax'}).send('Successfully logged in!');
                }else{
                    res.status(401).send('Access denied, please log in!')
                }
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;