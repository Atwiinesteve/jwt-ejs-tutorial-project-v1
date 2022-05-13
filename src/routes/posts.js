// ==========================
// Importing Modules
const express = require('express');
const verify = require('../tokens/tokens.js');
// ==========================




// ==========================
// Importing Custome Modules
const { readPost } = require('../controllers/posts.js');
// ==========================




// ==========================
// Main Route.
const router = express.Router();
// ==========================




// ==========================

// User Routes
// Get posts.
router.get('/posts', verify, readPost);


// ==========================




// ==========================
// Exporting Modules
module.exports = router;
// ==========================