const mongoose = require('mongoose');

const AnimeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    Synopsis: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Anime', AnimeSchema)