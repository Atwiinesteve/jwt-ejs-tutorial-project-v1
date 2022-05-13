// ==========================
// Importing Database
require('./src/database/database.js');
// ==========================





// ==========================
// Importing Modules
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const usersRoutes = require('./src/routes/users.js');
const usersPosts = require('./src/routes/posts.js');
// ==========================




// ==========================
// Application Setup.
const app = express();
const PORT = process.env.PORT || 4040;
// ==========================




// ==========================
// Middlewares.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/', (req, res) => { res.render('base', { title: ' | Login System' }) });
app.use('/api', usersRoutes);
app.use('/api', usersPosts);
// ==========================




// ==========================
// Server Initialization
app.listen(PORT, () => { console.log(`Server Application Running on http://localhost:${PORT}`); });
// ==========================