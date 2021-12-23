import express from 'express';
const PORT = process.env.PORT || 3000;
const app = express();

import { router as animeRoute } from './routes/anime.js';
import { router as bookRoute } from './routes/books.js';
import {router as televisionRoute } from './routes/television.js';
import { router as gameRoute } from './routes/games.js';

app.get('/', (req, res) => {
    res.send('Hello Worlds!')
});

app.use('/anime', animeRoute);
app.use('/books', bookRoute);
app.use('/television', televisionRoute);
app.use('/game', gameRoute);

app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Listening on port ${PORT}`)
});
