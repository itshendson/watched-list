const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.send('Please login to access your Watched List')
})

router.get('/mylist', (req, res) => {
    res.send('Create, edit, remove your Watched List')
})

module.exports = router;