console.log('Connection to back-end models successful');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name to continue'],
        trim: true,
        unique: true,
    },
    bucket: [{
        creator: String,
        title: String,
        description: String,
        status: Number,
        created_at: Date,
    }],
});

module.exports = mongoose.model('Users', UserSchema);
