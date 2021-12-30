const express = require('express');
const router = express.Router();

/*
Client queries the name of a book, server should return JSON file with list of books
Requires: parameter must be of type string, parameter cannot be null
Modifies: nothing 
Effects: a JSON file is sent to client containing a book objects from API source
*/
router.get('/', (req, res) => {

})

/*
Client adds a book to their watched list, server should add book to user's database
Requires: book title of type string, book description of type string, book image URL of type string is optional
Modifies: a book is pushed to MongoDB
Effects: a JSON file is created containing list of book objects from API source
*/
router.post('/', (req, res) => {

})


module.exports = router;