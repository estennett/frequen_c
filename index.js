var express = require('express');
var mongoose = require('mongoose');

//we will have a headache when we deploy to heroku
mongoose.connect('mongodb://localhost/frequency');

var app = express();
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));//need public directory

app.use('/', require('./controllers/frequencies'));

app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(4000, function(){
  console.log("We are up and running on port 4000!");
});
