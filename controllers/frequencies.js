var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');

// personally, I (and most other devs working in express) tend to prefer keeping
// controllers as clean and simple as possible, by only exporting functions from
// here, and declaring the routes elsewhere.
router.get('/frequencies', function(req, res){
  Frequency.find({}).then(function(frequencies){
    res.json(frequencies);
  });
});

router.get('/frequencies/:id', function(req, res){
  Frequency.findById(req.params.id).then(function(frequency){
    res.json(frequency);
  });
});

router.patch("/frequencies/:id", function(req, res){
  Frequency.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(frequency){
    res.json(frequency);
  })
});

router.post("/frequencies/", function(req, res){
  Frequency.create(req.body).then(function(newFrequency){
    res.json(newFrequency)
  })
});

// I feel like this route should be /frequencies/:id/podcasts/:podcastId to match
// with REST conventions. also, I feel like this should be in the podcasts controller!
router.delete("/frequencies/podcast/:id/:podcastId", function(req, res){
  // as much as possible, try to keep code clean by removing un-used comments
  // console.log(req.params.id);
  // console.log(req.params.podcastId);
  // Frequency.update( { id: req.params.id }, { $pullAll: { podcasts: [req.params.podcastId] } } );
  Frequency.findByIdAndUpdate( req.params.id , {
     $pull: {
       podcasts: {_id: req.params.podcastId} // well done getting this to work!
      }
    }, function(err, docs){
      if(err){
        console.log("No can brah")
      }
    } );
  res.json({success: true});
  // technically this res.json should be in the callback so:
  // 1) you don't respond before the deletion is done
  // 2) in the error case you should res.json success: false or something similar
});

router.delete("/frequencies/:id", function(req, res){
  Frequency.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true}); // like this! compared to comment in previous route
  });
});



module.exports = router;
