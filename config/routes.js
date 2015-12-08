var express = require('express');
var passport = require("passport");
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');
var podcastsController = require('../controllers/podcasts');

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}


router.route('/')
  .get(staticsController.home);

router.route("/secret")
 .get(authenticatedUser, usersController.secret)

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route("/logout")
  .get(usersController.getLogout)

router.route('/auth/twitter')
  .get(passport.authenticate('twitter'));

router.route('/auth/twitter/callback')
  .get(passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

router.route('/podcast_search')
  .get(podcastsController.getPodcastSearch)

module.exports = router
