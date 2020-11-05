express = require('express');
const router = express.Router();
const User = require('../UserModel');
// const mongoClient = require('mongo-client');
// const db = mongoClient.db();
const mongoose = require('mongoose');
const { response } = require('express');

router.post('/register', (req, res)=>{
    const data = req.body;
    // const db = client.db('schema-Ass-DB');

    User.findOne({ email: 'test@mail.de' }).then((user) => {
        console.log(user)

        // null

        if(user === null) {
            response.status(401).send('user already exists');
        } else {
            User.create({
                email: 'asd'
                // hash
            }).then(() => {
                // it was successful
                response.send('ok')
            });
        }
    });

});

module.exports = router;