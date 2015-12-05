var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');

// GET /signup
function getSignup(request, response) {
  response.render('signup', {
    message: request.flash('signupMessage')
  });
}

// POST /signup
function postSignup(request, response) {
  var signUpStrategy = passport.authenticate('local-signup',{
    successRedirect: '/',
    failureRedirect : '/signup',
    failureFlash : true
  });
  return signUpStrategy(request, response);
}

// GET /login
function getLogin(request, response) {
    return response.render('login', { message: request.flash('loginMessage') });
  }

// POST /login
function postLogin(request, response) {
  var loginStrategy = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
  return loginStrategy(request, response);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// Restricted page
function secret(request, response){
  response.render('secret');
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  secret: secret
}
//
