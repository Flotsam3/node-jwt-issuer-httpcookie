const User = require('../UserModel');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');

router.get('/view', passport.authenticate('jwt', { session: false }), (req, res)=>{
   // User.findById(req.user).then((user)=>{
        //console.log(req.user, user);
        ///if (user !== null){
        //    res.status(200).send(user);
        //} else {
            res.status(404).send('user not found');
        //}
    //})
})

router.put('/edit', passport.authenticate('jwt', { session: false }), (req, res)=>{
    generateHash(req.body.hash);
    async function generateHash(password){
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        
        User.findOneAndUpdate({email:req.body.email}, {hash: hashedPass, telephone: req.body.telephone, dateOfBirth: req.body.dateOfBirth}).then((user)=>{
            if (user !== null){
                res.status(200).send('User updated!');
            } else {
                res.status(404).send('User not found!');
            }
        })
    };
})

router.delete('/delete', passport.authenticate('jwt', { session: false }), (req, res)=>{
    console.log(req.body.email, 32212);
    User.findOneAndDelete({email: req.body.email}).then((user)=>{
        if (user !== null){
            res.status(200).send('User successfully deleted!');
        } else {
            res.status(404).send('User not found!');
        }
    })
})

module.exports = router;