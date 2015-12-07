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

module.exports = router;
