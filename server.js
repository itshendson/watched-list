const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const animeRoute = require('./routes/anime.js');
const bookRoute = require('./routes/books.js');
const televisionRoute = require('./routes/television.js');
const gameRoute = require('./routes/games.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Worlds!')
});

app.use('/anime', animeRoute);
app.use('/books', bookRoute);
app.use('/television', televisionRoute);
app.use('/game', gameRoute);

mongoose.connect(process.env.DB_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Listening on port ${PORT}`);
});
