const express = require('express');
const connectDatabase = require('./config/database');
const mongoose = require('mongoose');
require('dotenv').config();

const animeRoute = require('./routes/anime.js');
const bookRoute = require('./routes/books.js');
const televisionRoute = require('./routes/television.js');
const gameRoute = require('./routes/games.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDatabase();

/**
 * ---------------- ROUTES TO API ----------------
 */
app.use('/anime', animeRoute);
app.use('/books', bookRoute);
app.use('/television', televisionRoute);
app.use('/game', gameRoute);

app.get('/', (req, res) => {
  res.send('Hello Worlds!')
});

/**
 * ---------------- SERVER ----------------
 */
app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Listening on port ${PORT}`);
});
