const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/login', (req, res) => {
  res.send('Please login to access your Watched List')
})

router.get('/mylist', (req, res) => {
  res.send('Create, edit, remove your Watched List')
})

router.get("/profile", (req, res) => {
  console.log({ googleId: req.user.id });
  User.findOne({ googleId: req.user.id })
  .lean()
  .exec((err, user) => {
    if (err) console.log(err);
    if (user) res.status(200).send(`if this appears it should mean that findOne found a matching user, right???`);
    else {
      res.status(404).send();
    }
  });
});

module.exports = router;