const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

module.exports = (passport) => {
  const authUser = async (accessToken, refreshToken, profile, done) => {
    const newUser = {
      googleId: profile.clientID
    }

    try {
      let user = await User.findOne({ googleId: profile.id })

      if (user) {
        done(null, user)
      } else {
        user = await User.create(newUser)
        done(null, user)
      }
    } catch (err) {
      console.error(err)
    }
  }

  passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
    passReqToCallback   : true
  }, authUser));
}