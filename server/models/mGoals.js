// console.log('Connection to back-end models successful');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new mongoose.Schema({
    creator: String,
    title: {
        type: String,
        required: [true, 'Title cannot be left blank'],
        minlength: [5, 'Title must contain at least 5 characters'],
    },
    description: {
        type: String,
        required: [true, 'Description cannot be left blank'],
        minlength: [5, 'Description must contain at least 10 characters'],
    },
    status: {
        type: Number,
        default: 0,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Goals', GoalSchema);
