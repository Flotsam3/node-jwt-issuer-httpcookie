express = require('express');
const router = express.Router();
const User = require('../UserModel');
const bcrypt = require('bcrypt');
const jwtIssuer = require('../utils/jwtissuer');

const name = 'User5';
const email = 'user5@mail.de';
let hashedPass = '';
let hash = 'password5';

router.post('/register', (req, res)=>{

    User.findOne({ email: req.body.email }).then((user) => {
        if(user !== null) {
            res.status(401).send('User already exists');
        } else {
            generateHash(req.body.hash);

            async function generateHash(password){
                const salt = await bcrypt.genSalt(10);
                hashedPass = await bcrypt.hash(password, salt);
                
                User.create({
                    name: req.body.name,
                    email: req.body.email,
                    hash: hashedPass
                }).then(() => {
                    res.send('New user created!')
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
            bcrypt.compare(hash, user.hash, (err, valid)=>{
                if (err) throw err;
                
                if (valid){
                    console.log(req.body);
                    res.status(200).send(jwtIssuer());
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