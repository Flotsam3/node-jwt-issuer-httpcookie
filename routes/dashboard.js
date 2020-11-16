const User = require('../UserModel');
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/view', passport.authenticate('jwt', { session: false }), (req, res)=>{
    User.findById(req.user).then((user)=>{
        console.log(req.user, user);
        if (user !== null){
            res.status(200).send(user);
        } else {
            res.status(404).send('user not found');
        }
    })
    //res.status(200).send('Site dashboard/view loaded!');
})

router.put('/edit', passport.authenticate('jwt', { session: false }), (req, res)=>{
    User.findOneAndUpdate({email:req.body.email}, {hash: 'qwertz'}).then((user)=>{
        if (user !== null){
            res.status(200).send('User updated!');
        }
    })
})

router.delete('/delete', passport.authenticate('jwt', { session: false }), (req, res)=>{
    User.findOneAndDelete({email: req.body.email}).then((user)=>{
        if (user !== null){
            res.status(200).send('User successfully deleted!');
        }
    })
})

module.exports = router;