// ==========================
// Importing Database
require('./src/database/database.js');
// ==========================





// ==========================
// Importing Modules
const express = require('express');
const bodyParser = require('body-parser');
// ==========================




// ==========================
// Application Setup.
const app = express();
const PORT = process.env.PORT || 4040;
// ==========================




// ==========================
// Middlewares.
app.use(bodyParser.json());
// ==========================




// ==========================
// Views Templating Engine Setup
app.set('views', './src/views');
app.set('view engine', 'ejs');
// ==========================




// ==========================
// Serving Static Files
app.use(express.static('public'));
app.use('css', express.static(__dirname + 'public/css'));
app.use('img', express.static(__dirname + 'public/img'));
app.use('js', express.static(__dirname + 'public/js'));
// ==========================




// ==========================
// Routes
app.get('/', (req, res) => { res.status(200).send('Welcome the EJS Templating Engine!'); });
// ==========================




// ==========================
// Server Initialization
app.listen(PORT, () => { console.log(`Server Application Running on http://localhost:${PORT}`); });
// ==========================