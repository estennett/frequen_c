var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var hbs = require('hbs');
var path = require('path');
var router = express.Router();
var bodyParser = require('body-parser');
var morgan = require('morgan'); //to have more rebose logs in passport...whatever that means
var cookieParser = require('cookie-parser');//allows us to handle sessions
var bodyParser = require('body-parser');
var session = require('express-session');
var staticsController = require('./controllers/statics');
var usersController = require('./controllers/users');
var uriUtil = require('mongodb-uri')

// var mongodbUri = 'mongodb://heroku_fw2w8pxs:tesa7kp6vfnpq6tdec9pb99ktj@ds027155.mongolab.com:27155/heroku_fw2w8pxs';
// var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect('mongodb://heroku_fw2w8pxs:tesa7kp6vfnpq6tdec9pb99ktj@ds027155.mongolab.com:27155/heroku_fw2w8pxs');//we will have a headache when we deploy to heroku

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/', require('./controllers/frequencies'));

app.set('view engine', 'hbs');
app.set("views","./public/js/views");

app.use(express.static(path.join(__dirname, 'public')));//need public directory
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

//custom middleware
app.use(function(req, res, next){
  res.locals.currentUser = req.user
  next();
})
// old home route, moved to routes.js file
// app.get('/', function(req, res){
//   res.render('index.hbs');
// });

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  if (req.isAuthenticated()) return next();

  // Otherwise the request is always redirected to the home page
  res.redirect('/');
}


var routes = require('./config/routes');//all routes for passport live here
app.use(routes);

app.listen(process.env.PORT || 4000, function(){
  console.log("We are up and running on port 4000!");
});
