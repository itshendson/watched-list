const express = require('express');
const router = express.Router();

/*
Client queries the name of a tv show, server should return JSON file with list of tv shows
Requires: parameter must be of type string, parameter cannot be null
Modifies: nothing 
Effects: a JSON file is sent to client containing a tv show objects from API source
*/
router.get('/', (req, res) => {

})

/*
Client adds a tv show to their watched list, server should add tv show to user's database
Requires: tv show title of type string, tv show description of type string, tv show image URL of type string is optional
Modifies: a tv show is pushed to MongoDB
Effects: a JSON file is created containing list of tv show objects from API source
*/
router.post('/', (req, res) => {

})

module.exports = router;