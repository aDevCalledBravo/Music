const mongoose = require('mongoose');

const songSchema = mongoose.Schema({});

const songs = mongoose.model('songs', songSchema);

module.exports = songs;
