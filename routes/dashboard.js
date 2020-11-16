const User = require('../UserModel');
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/view', passport.authenticate('jwt', { session: false }), (req, res)=>{
    User.findOne({email: req.body.email}).then((user)=>{
        if (user !== null){
            res.status(200).send(user);
        }
    })
    res.status(200).send('Site dashboard/view loaded!');
})

router.put('/edit', passport.authenticate('jwt', { session: false }), (req, res)=>{

})

router.delete('/delete', passport.authenticate('jwt', { session: false }), (req, res)=>{

})

module.exports = router;