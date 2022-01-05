const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = require('./config/database.js');
require('./config/passport.js')(passport);

const animeRoute = require('./routes/anime.js');
const bookRoute = require('./routes/books.js');
const televisionRoute = require('./routes/television.js');
const gameRoute = require('./routes/games.js');

const PORT = process.env.PORT || 3000;
const app = express();

// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongoDB
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

/**
 * ---------------- SERVER ----------------
 */
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));