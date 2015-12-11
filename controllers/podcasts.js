var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');
var flash = require('connect-flash');

// GET /:freq_id/podcast_search
function getPodcastSearch(request, response) {
  response.render('podcast_search');
}

// POST /:freq_id/podcast_search
function addPodcast(request, response) {
  var data = {
    title: request.body.podcastData[0],
    audio: request.body.podcastData[1],
    description: request.body.podcastData[2]
  }
  var podcast = new Podcast(data);
  var freq = Frequency.findById(request.params.freq_id).then(function(response){
    response.podcasts.push(podcast);
    response.save(function(err){
      if (err){
        console.log(err)
      }else{
        console.log("frequency was saved")
      }
    });
  })
  response.redirect('/');
}

module.exports = {
  getPodcastSearch: getPodcastSearch,
  addPodcast: addPodcast
}
