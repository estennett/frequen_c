var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

mongoose.connect('mongodb://localhost/frequency');//we will have a headache when we deploy to heroku

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/', require('./controllers/frequencies'));


app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));//need public directory


app.get('/', function(req, res){
  res.render('index.html');
});

app.listen(4000, function(){
  console.log("We are up and running on port 4000!");
});
