const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const animeRoutes = require('./routes/anime');
const bookRoutes = require('./routes/books');
const movieRoutes = require('./routes/television');
const gameRoutes = require('./routes/games');

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, (err)=> {
    if (err) console.log(err);
    console.log(`Listening on port ${PORT}`)
});