const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDatabase = require('./config/database.js');
require('./config/passport.js')(passport);

const PORT = process.env.PORT || 3000;
const app = express();

// Body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sessions
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
app.use('/', require('./routes/index.js'));
app.use('/auth', require('./routes/auth.js')); 
app.use('/anime', require('./routes/anime.js'));
app.use('/books', require('./routes/books.js'));
app.use('/television', require('./routes/television.js'));
app.use('/game', require('./routes/games.js'));

/**
 * ---------------- SERVER ----------------
 */
app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Listening on port ${PORT}`);
});