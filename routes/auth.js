const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login', failureMessage: true }),
  function(req, res) {
    res.redirect('http://localhost:3000/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3000/');
});

module.exports = router;