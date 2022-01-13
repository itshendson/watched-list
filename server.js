const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

const connectDatabase = require('./config/database.js');
require('./config/passport.js')(passport);

const PORT = process.env.PORT || 3080;
const app = express();

/**
 * ---------------- BODY-PARSER MIDDLEWARE ----------------
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


/**
 * ---------------- COOKIE SESSION ----------------
 */
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_STRING })  
}))


/**
 * ---------------- PASSPORT MIDDLEWARE ----------------
 */
app.use(passport.initialize());
app.use(passport.session());


/**
 * ---------------- CONNECT TO MONGODB ATLAS ----------------
 */
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