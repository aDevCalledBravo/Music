// Import packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dbURI = require('./config/db.js');
const routes = require('./routes/web.js');

// Initiate the app
const app = express();
app.listen(3000);

// Link to mongoDB atlas
// const dbURI = dbURI;
mongoose.connect(dbURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then((result) => {
	console.log('Connected to DB and listening for requests on PORT 3000');
	app.listen(3000);
})
.catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Set Up static files
app.use(express.static('public'));

// Using morgan to log instead
app.use(morgan('dev'));

app.use('/', routes);
