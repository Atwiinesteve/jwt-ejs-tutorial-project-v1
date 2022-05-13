// ==========================
// Importing Custome Modules
const Post = require('../models/post.js');
// ==========================




// ==========================


// User Controller Methods.

// Read Post
exports.readPost = (req, res) => {

    const post = new Post({
        title: 'The Third JWT API',
        content: 'This is the API content viewed by authorised people.',
        author: 'Kiiza Atwiine Stephen'
    })

    res.status(200).send(post);

}


// ==========================