var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');

// GET /signup
function getPodcastSearch(request, response) {
  response.render('podcast_search');
}

module.exports = {
  getPodcastSearch: getPodcastSearch
}
