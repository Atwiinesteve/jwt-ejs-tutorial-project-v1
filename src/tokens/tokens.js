// Importing Modules
// ===================================
const jwt = require('jsonwebtoken');
// ===================================




// Authenticate user to view posts
function authenticate(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Unathorised - Access denied');

    try {
        const verify = jwt.verify(token, process.env.TOKEN);
        req.user = verify;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}



// Export Router
module.exports = authenticate;