// ==========================
// Importing Modules
const express = require('express');
// ==========================




// ==========================
// Importing Custome Modules
const { registerUser, loginUser } = require('../controllers/users.js');
// ==========================




// ==========================
// Main Route.
const router = express.Router();
// ==========================




// ==========================

// User Routes
// Creating and Registering Users.
router.post('/register', registerUser);

// Creating and Registering Users.
router.post('/register', loginUser);

// ==========================




// ==========================
// Exporting Modules
module.exports = router;
// ==========================