const mongoose = require('mongoose');

const userSchema = mongoose.Schema({});

const users = mongoose.model('users', songSchema);

module.exports = users;
