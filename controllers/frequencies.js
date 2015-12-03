var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');


router.get('/frequencies', function(req, res){
  // Frequency.find({}).populate("songs").then(function(frequencies){
  //   res.json(frequencies);
  // });
});

module.exports = router;
