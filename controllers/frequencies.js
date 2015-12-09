var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');

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

router.post("/frequencies/:id", function(req, res){
  console.log(req.body);
  Frequency.create({$set: req.body}, {new: true}).then(function(frequency){
    console.log(res.frequency.title)
    res.frequency;
  })
});

router.delete("/frequencies/:id", function(req, res){
  Frequency.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true});
  });
});

module.exports = router;
