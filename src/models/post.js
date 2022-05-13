// ==========================
// Importing Modules
const mongoose = require('mongoose');
// ==========================




// ==========================
// User Schema
const postSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    content: {
        type: 'string',
        required: true
    },
    author: {
        type: 'string',
        required: true
    }
}, { timestamps: true });
// ==========================




// ==========================
// Exporting Database
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
// ==========================