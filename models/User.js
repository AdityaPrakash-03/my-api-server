const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({  //for input
    name: String,
    email: String,
    age: Number,
});

module.exports = mongoose.model('User', UserSchema);
