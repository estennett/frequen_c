var express = require('express');
var app = express();
var mongoose = require('mongoose');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));//need public directory



app.get('/', function(req, res){
  res.render('index.html');
});


app.use('/frequencies', require('./controllers/frequencies'));



app.listen(4000, function(){
  console.log("We are up and running on port 4000!");
});
