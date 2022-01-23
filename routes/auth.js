const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

//TODO IDEA IS TO put useDispatch() here to STORE data about the user profile so that I can use it in different Components
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