// ==========================
// Importing Modules
const mongoose = require('mongoose');
// ==========================




// ==========================
// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    date: {
        type: 'Date',
        default: Date.now
    }
}, { timestamps: true });
// ==========================




// ==========================
// Exporting Database
const User = mongoose.model('User', userSchema);
module.exports = User;
// ==========================