var express = require('express');
var app = express();
var mongoose = require('mongoose');
var hbs = require('hbs');
var bodyParser = require('body-parser');

app.use(bodyParser());

app.set('view engine', 'hbs');
app.use(express.static(path.koin(__dirname, 'public')));



app.get('/', frequencies.index);


app.use('/frequencies', require('./controllers/frequencies'));
app.use('/podcasts', require('./controllers/podcasts'));



app.listen(4000, function(){
  console.log("We are up and running on port 4000!");
});
