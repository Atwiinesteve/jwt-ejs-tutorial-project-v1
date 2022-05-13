// ==========================
// Importing Modules
const mongoose = require('mongoose');
require('dotenv').config();
// ==========================




// ==========================
// Database Setup.
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Database Connection Successful')
}).catch((err) => {
    console.log('Database Connection Error: ' + err)
});
// ==========================




// ==========================
// Exporting Database
module.exports = mongoose;
// ==========================