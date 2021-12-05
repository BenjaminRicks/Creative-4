const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/museum', {
  useNewUrlParser: true
});

const animeEntry = new mongoose.Schema({
	title: String,
	rating: String,
	description: String,
	path: String,
});

const Entry = mongoose.model('Entry', animeEntry);



app.listen(3000, () => console.log('Server listening on port 3000!'));
	







