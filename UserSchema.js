mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    hash: {type: String, required: true},
    dateOfBirth: {type: Date},
    telephone: {type: String}
});

module.exports = UserSchema;