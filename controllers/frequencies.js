var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');


router.get('/frequencies', function(req, res){
  Frequency.find({}).then(function(frequencies){
    res.json(frequencies);
  // res.send("hello");
  });
});

module.exports = router;
