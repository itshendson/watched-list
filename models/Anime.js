import express from 'express';
import mongoose from 'mongoose';

export const AnimeSchema = mongoose.Schema({
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