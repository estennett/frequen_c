require("./schema");
var mongoose = require("mongoose");
var conn = mongoose.connect("mongodb://localhost/frequency");
var FrequencyModel = require("../models/frequency")
var PodcastModel = require("../models/podcast")


FrequencyModel.remove({}, function(err){
  console.log(err)
});
PodcastModel.remove({}, function(err){
  console.log(err)
});

var history = new FrequencyModel({title: "history", genre: "history"})//new frequency model
var music = new FrequencyModel({title: "music", genre: "music"})//new frequency model


var podcast1 = new PodcastModel({title: "A podcast about history"})
var podcast2 = new PodcastModel({title: "Another podcast about history"})
var podcast4 = new PodcastModel({title: "A podcast about music"})
var podcast3 = new PodcastModel({title: "Another podcast about music"})

var frequencies = [history, music];
var podcasts = [podcast1, podcast2, podcast3, podcast4];

for( var i = 0; i < frequencies.length; i++){
  frequencies[i].podcasts.push(podcasts[i], podcasts[i+2]);
  frequencies[i].save(function(err){
    if (err){
      console.log(err)
    }else{
      console.log("frequency was saved")
    }
  })
}
