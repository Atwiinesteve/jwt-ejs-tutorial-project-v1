// ==========================
// Importing Custome Modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
// ==========================




// ==========================


// User Controller Methods.

// User Creation and Storage to Database.
exports.registerUser = async function(req, res) {

    // If the User already exists.
    const alreadyExists = await User.findOne({ email: req.body.email });
    if (alreadyExists) return res.status(400).json({ error: 'User Already Exists' });

    // If User is being creted for the first time, encrypt password.
    const salt = await bcrypt.genSalt(15);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })

    user.save()
        .then(() => { res.json({ message: 'User added to database successfully' }); })
        .catch(err => { res.json({ message: 'Error trying to save user to database: ' + err.message }); });
}




// User Login and Authentication.
exports.loginUser = function(req, res) {}

// ==========================