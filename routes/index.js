const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get("/profile", async (req, res) => {
  console.log({ email: req.user.email });

  const user = await User.findOne({ email: req.user.email });
  if (err, user) {
    console.log("User exists!"); // this works??
  } else {
    console.log(err);
  }
  // User.findOne({ googleId: req.user.email }, (err, user) => {
  //   if (user) {
  //     if (err) console.log(err);
  //     res.status(200).send('matched');
  //   } else {
  //     res.status(404).send();
  //   }
  // })
  // .lean()
  // .exec((err, user) => {
  //   if (err) console.log(err);
  //   if (user) res.status(200).send('seeable?');
  //   else {
  //     res.status(404).send();
  //   }
  // });
});

module.exports = router;