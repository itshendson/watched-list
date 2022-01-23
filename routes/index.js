const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/login', (req, res) => {
  res.send('Please login to access your Watched List')
})

router.get('/mylist', (req, res) => {
  res.send('Create, edit, remove your Watched List')
})

router.get("/profile", function (req, res) {
  User.findOne({ googleId: req.user.id })
    .lean()
    .exec((err, user) => {
      if (err) console.log(err);
      if (user) res.status(200).send(user);
      else {
        res.status(404).send();
      }
    });
});

module.exports = router;