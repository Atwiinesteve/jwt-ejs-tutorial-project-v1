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
exports.loginUser = async function(req, res) {

    // Check user if exists.
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: 'User with Email Not Found.' });

    // User email vaild, validate password.
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(401).json({ message: 'Unauthorised - Access Denied.' });

    //     When successfully logged-in, assign a token.slice()
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
    res.status(200).header('auth-token', token).json({
        "Auth-token": token,
        message: 'Loggedin as ' + user.name
    })
}


// ==========================