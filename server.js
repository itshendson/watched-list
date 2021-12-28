import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 3000;
const DB_STRING = process.env.DB_STRING;

import { router as animeRoute } from './routes/anime.js';
import { router as bookRoute } from './routes/books.js';
import { router as televisionRoute } from './routes/television.js';
import { router as gameRoute } from './routes/games.js';

const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello Worlds!')
});

app.use('/anime', animeRoute);
app.use('/books', bookRoute);
app.use('/television', televisionRoute);
app.use('/game', gameRoute);

mongoose.connect(
    process.env.DB_STRING,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Listening on port ${PORT}`)
});
