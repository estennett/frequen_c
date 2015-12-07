var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');


function home(req, res) {
  res.render('index.hbs');
}


module.exports = {
  home: home,
}
