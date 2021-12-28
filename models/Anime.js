const express = require('express');
const mongoose = require('mongoose');

const AnimeSchema = mongoose.Schema({
    title: {
        Type: String,
        required: true
    },
    image_url: {
        Type: String,
        required: true
    },
    type: {
        Type: String,
        required: true
    },
    Synopsis: {
        Type: String,
        required: true
    }
});