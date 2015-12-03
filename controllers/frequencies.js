var express = require('express');
var router = express.Router();
var Frequency = require('../models/frequency');
var Podcast = require('../models/podcast');


router.get('/', function(req, res){
  alert('hello world!')
})


module.exports = router;
