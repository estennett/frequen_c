var LocalStrategy = require("passport-local").Strategy
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require("../models/user");
var env = require('../env');

module.exports = function(passport){
    passport.serializeUser(function(user, callback) {
      callback(null, user.id);//we are going to store someone in the session by their id
    });
    passport.deserializeUser(function(id, callback) {
      User.findById(id, function(err, user) {
          callback(err, user);
      });
    }),
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function(req, email, password, callback){
    User.findOne({ 'local.email' :  email }, function(err, user) {
      if (err) return callback(err);
      // If there already is a user with this email
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
      } else {
        // There is no email registered with this email
        // Create a new user
        var newUser            = new User();
        newUser.local.email    = email;
        newUser.local.password = newUser.encrypt(password);
        newUser.save(function(err) {
          if (err) throw err;
          return callback(null, newUser);
        });
      }
    });
  }))
    passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, callback) {
    User.findOne({'local.email': email}, function(err, user){
      if(err) return callback(err, false)
      // If no user is found - checking for email
       if (!user) {
         return callback(null, false, req.flash('loginMessage', 'No user found.'));
       }
      // Wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
      }

      return callback(null, user);
    })
  }));


  passport.use('twitter', new TwitterStrategy({
      consumerKey: env.consumerKey,
      consumerSecret: env.consumerSecret,
      callbackUrl: env.callbackUrl
    }, function(token, secret, profile, done){
      process.nextTick(function(){
        User.findOne({'twitter.id': profile.id}, function(err, user){
          if(err) return done(err);

          // If the user already exists, just return that user.
          if(user){
            return done(null, user);
          } else {
            // Otherwise, create a brand new user using information passed from Twitter.
            var newUser = new User();

            // Here we're saving information passed to us from Twitter.
            newUser.twitter.id = profile.id;
            newUser.twitter.token = token;
            newUser.twitter.username = profile.username;
            newUser.twitter.displayName = profile.displayName;

            newUser.save(function(err){
              if(err) throw err;
              return done(null, newUser);
            })
          }
        })
      })
    }))
}
