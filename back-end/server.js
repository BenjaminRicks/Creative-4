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

const gameEntry = new mongoose.Schema({
        title: String,
        description: String,
        path: String,
});


const Entry = mongoose.model('Entry', animeEntry);
const EntryG = mongoose.model('EntryG', gameEntry);


app.get('/api/anime', async (req, res) => {
  try {
    let animeList = await Entry.find();
    res.send(animeList);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post('/api/anime', async (req, res) => {
  const anime = new Entry({
    title: req.body.title,
    rating: req.body.rating,
    description: req.body.description,
    path: req.body.path,
  });
  try {
    await anime.save();
    res.send(anime);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.delete('/api/anime/:id', async (req, res) => {
    try {
    await Entry.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.put('/api/anime/:id', async (req, res) => {
  query = {_id: req.params.id};
  Entry.findOneAndUpdate(query, {
          title: req.body.title,
	  rating: req.body.rating,
          description: req.body.description,
  }, function (err, entry) {});
  try {
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }

});


app.get('/api/game', async (req, res) => {
  try {
    let games = await EntryG.find();
    res.send(games);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.post('/api/game', async (req, res) => {
  const game = new EntryG({
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
  });
  try {
    await game.save();
    res.send(game);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.delete('/api/game/:id', async (req, res) => {
    try {
    await EntryG.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.put('/api/game/:id', async (req, res) => {
  query = {_id: req.params.id};
  EntryG.findOneAndUpdate(query, {
          title: req.body.title,
          description: req.body.description,
  }, function (err, entry) {});
  try {
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }

});


app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});




app.listen(3001, () => console.log('Server listening on port 3001!'));
	







