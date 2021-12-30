const express = require('express');
const router = express.Router();

/*
Client queries the name of a video game, server should return JSON file with list of video games
Requires: parameter must be of type string, parameter cannot be null
Modifies: nothing 
Effects: a JSON file is sent to client containing a video game objects from API source
*/
router.get('/', (req, res) => {

})

/*
Client adds a video game to their watched list, server should add video game to user's database
Requires: video game title of type string, video game description of type string, video game image URL of type string is optional
Modifies: a video game is pushed to MongoDB
Effects: a JSON file is created containing list of video game objects from API source
*/
router.post('/', (req, res) => {

})

module.exports = router;