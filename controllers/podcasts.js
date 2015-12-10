var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');

// GET /:freq_id/podcast_search
function getPodcastSearch(request, response) {
  response.render('podcast_search');
}

// POST /:freq_id/podcast_search
function addPodcast(request, response) {
  var data = {
    title: "add This Podcast!",
    audio: "example.mp3",
    description: "description of the podcast"
  }
  var podcast = new Podcast(data);
  console.log("This is the new podcast: " + podcast);

  var freq = Frequency.find({}).then(function(response){
    console.log("done!!!");
    response[0].podcasts.push(podcast);
    response[0].save(function(err){
      if (err){
        console.log(err)
      }else{
        console.log("frequency was saved")
      }
    });
    console.log(response[0])
  })
}

module.exports = {
  getPodcastSearch: getPodcastSearch,
  addPodcast: addPodcast
}
