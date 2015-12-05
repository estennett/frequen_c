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

var history = new FrequencyModel({title: "History Buffs", genre: "history"})//new frequency model
var music = new FrequencyModel({title: "Musical Musings", genre: "music"})//new
var crime = new FrequencyModel({title: "Criminal Minds", genre: "crime"})//new
var comedy = new FrequencyModel({title: "Comedy Nerds", genre: "comedy"})//new
var beverage = new FrequencyModel({title: "Let's Talk Drank", genre: "beverages"})//new
var design = new FrequencyModel({title: "Modern Design", genre: "design"})//new
var science = new FrequencyModel({title: "Science Geeks", genre: "science"})//new
var dance = new FrequencyModel({title: "All About Dance", genre: "dance"})//new



var podcast1 = new PodcastModel({title: "Sit Amet"})
var podcast2 = new PodcastModel({title: "Lacus Nullam"})
var podcast3 = new PodcastModel({title: "Similique Lorem"})
var podcast4 = new PodcastModel({title: "Babbleset"})
var podcast5 = new PodcastModel({title: "Realbuzz"})
var podcast6 = new PodcastModel({title: "Brightbean"})
var podcast7 = new PodcastModel({title: "Skidoo"})
var podcast8 = new PodcastModel({title: "Edgewire"})
var podcast9 = new PodcastModel({title: "Kwimbee"})
var podcast10 = new PodcastModel({title: "Blogtags"})
var podcast11 = new PodcastModel({title: "Thoughtstorm"})
var podcast12 = new PodcastModel({title: "Skipfire"})


var frequencies = [history, music, crime, comedy, beverage, design, science, dance];
var podcasts = [podcast1, podcast2, podcast3, podcast4, podcast5, podcast6, podcast7, podcast8, podcast9, podcast10, podcast11, podcast12];

for( var i = 0; i < frequencies.length; i++){
  frequencies[i].podcasts.push(podcasts[i], podcasts[i+5]);
  frequencies[i].save(function(err){
    if (err){
      console.log(err)
    }else{
      console.log("frequency was saved")
    }
  })
}
