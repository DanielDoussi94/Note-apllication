const express = require('express')
const router = express.Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile)
  }
));


//Google Login Route
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

  //Retrieve user Data
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect: '/dashboard'
})
);

router.get('/login-failure',(req,res)=>{
    res.send('Something is wrong...')
})

//Stocker certaines informations de l'utilsateur 

passport.serializeUser(function (user, done) {
       done(null, user.id);
})

//Retrieve user data from session

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
})
})

module.exports = router