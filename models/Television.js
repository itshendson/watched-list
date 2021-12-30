const mongoose = require('mongoose');

const TelevisionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Television', TelevisionSchema);