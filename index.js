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
// var staticsController = require('./controllers/statics');
// var usersController = require('./controllers/users');


mongoose.connect('mongodb://localhost/frequency');//we will have a headache when we deploy to heroku

app.set('view engine', 'hbs');//changed 'js' to 'hbs'
app.set("views","./views/user");
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/', require('./controllers/frequencies'));
app.use(express.static(path.join(__dirname, 'public')));//need public directory
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' }));
require('./config/passport')(passport);
//custom middleware
app.use(function(req, res, next){
  res.locals.currentUser = req.user
  next();
})

app.get('/', function(req, res){
  res.render('index.html');
});

var routes = require('./config/routes');
app.use(routes);


//was having trouble configuring passport routes in our index.js file - the below lives in config/routes.js
// function authenticatedUser(req, res, next) {
//   // If the user is authenticated, then we continue the execution
//   if (req.isAuthenticated()) return next();
//
//   // Otherwise the request is always redirected to the home page
//   res.redirect('/');
// }
//
// router.route('/')
//   .get(staticsController.home);
//
//   router.route("/secret")
//      .get(authenticatedUser, usersController.secret)
//
// router.route('/signup')
//   .get(usersController.getSignup)
//   .post(usersController.postSignup)
//
// router.route('/login')
//   .get(usersController.getLogin)
//   .post(usersController.postLogin)
//
// router.route("/logout")
//   .get(usersController.getLogout)


app.listen(4000, function(){
  console.log("We are up and running on port 4000!");
});
