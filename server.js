const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const animeRoute = require('./routes/anime');
const bookRoute = require('./routes/books');
const televisionRoute = require('./routes/television');
const gameRoute = require('./routes/games');

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
