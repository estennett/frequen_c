var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');
var flash = require('connect-flash');

// per my comment in the frequencies controller, I like this approach better
// of not declaring routes here. But even more important than which one you pick,
// it's important to be consistent!

// GET /:freq_id/podcast_search
function getPodcastSearch(request, response) {
  response.render('podcast_search');
}

// POST /:freq_id/podcast_search
function addPodcast(request, response) {
  var data = {
    // is there any way to format this data (on the client side JS) into an
    // object rather than an array, so the code is more readable?
    title: request.body.podcastData[0],
    audio: request.body.podcastData[1],
    description: request.body.podcastData[2]
  }
  var podcast = new Podcast(data);
  var freq = Frequency.findById(request.params.freq_id).then(function(response){
    // you've got two different `response` vars here, one for the DB response,
    // and one for the express response. this is called shadowing the variable,
    // and it's generally a code smell. I'd call this inner variable something
    // frequency or result
    response.podcasts.push(podcast);
    response.save(function(err){
      if (err){
        console.log(err)
      }else{
        console.log("frequency was saved")
      }
    });
  })
  response.redirect('/'); // this response should only happen inside the callback (once the podcast is saved)
  // or else you may render the new page which doesn't show the saved data (if there's a delay)
  // also, in the error case you should probably render an error instead of redirecting
}

module.exports = {
  getPodcastSearch: getPodcastSearch,
  addPodcast: addPodcast
}
