var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');
// not sure you need most of these require statements.

function home(req, res) {
  res.render('index.hbs', { messages: req.flash('test') }); // is this flash message used anywhere?
}

module.exports = {
  home: home,
}
