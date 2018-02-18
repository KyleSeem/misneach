console.log('Connection to back-end models successful');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name cannot be left blank'],
        trim: true
    },



});

module.exports = mongoose.model('Users', UserSchema);
