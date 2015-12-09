require("./schema");
var mongoose = require("mongoose");
// var conn = mongoose.connect('mongodb://heroku_fw2w8pxs:tesa7kp6vfnpq6tdec9pb99ktj@ds027155.mongolab.com:27155/heroku_fw2w8pxs');
// var conn = mongoose.connect(process.env.MONGOLAB_URI);
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



var podcast1 = new PodcastModel({title: "Sit Amet", description: "Shoreditch health goth narwhal umami, direct trade put a bird on it brunch art party skateboard bicycle rights swag."})
var podcast2 = new PodcastModel({title: "Cardigan kogi taxidermy, microdosing photo booth pinterest seitan banjo health goth."})
var podcast3 = new PodcastModel({title: "Similique Lorem", description:"Put a bird on it cronut brooklyn, vinyl yr stumptown artisan farm-to-table pug cardigan. Yuccie four dollar toast kinfolk, shabby chic heirloom vegan chartreuse you probably haven't heard of them."})
var podcast4 = new PodcastModel({title: "Babbleset", description:"Bushwick wayfarers hella tacos, taxidermy bespoke venmo yr etsy swag occupy kinfolk tattooed."})
var podcast5 = new PodcastModel({title: "Realbuzz", description: "Yr farm-to-table DIY hashtag flexitarian, tacos heirloom hammock yuccie poutine chambray. Cray shabby chic portland chicharrones, pop-up chia YOLO cardigan."})
var podcast6 = new PodcastModel({title: "Brightbean", description: "ice dreamcatcher flexitarian, locavore narwhal meggings cold-pressed leggings knausgaard mixtape roof party. 8-bit wolf ethical, taxidermy roof party sriracha cardigan yuccie"})
var podcast7 = new PodcastModel({title: "Skidoo", description: "Ennui kombucha twee squid cliche, portland pickled pitchfork selvage truffaut bitters blue bottle."})
var podcast8 = new PodcastModel({title: "Edgewire", description: "Pork belly fashion axe fixie mustache direct trade literally. Leggings austin tattooed bespoke readymade plaid, williamsburg direct trade +1 cray."})
var podcast9 = new PodcastModel({title: "Kwimbee", description:"Heirloom brunch fixie before they sold out, bitters put a bird on it echo park sustainable tofu VHS direct trade scenester green juice. "})
var podcast10 = new PodcastModel({title: "Blogtags", description: "Tumblr distillery pickled mlkshk cornhole fashion axe, flannel green juice. Plaid banjo knausgaard +1."})
var podcast11 = new PodcastModel({title: "Thoughtstorm", description:"Everyday carry 8-bit bitters, quinoa wayfarers thundercats squid meggings authentic wolf chambray pickled blog. Tumblr pickled DIY neutra, health goth celiac cold-pressed."})
var podcast12 = new PodcastModel({title: "Skipfire", description: "Artisan try-hard venmo put a bird on it asymmetrical, twee neutra offal. Austin twee four dollar toast tacos."})
var podcast13 = new PodcastModel({title: "Laggedsite", description:"Craft beer skateboard bespoke, asymmetrical poutine polaroid brooklyn try-hard godard master cleanse irony fap YOLO."})
var podcast14 = new PodcastModel({title: "Roobe", description: "Semiotics cardigan bespoke locavore, cray 90's art party shoreditch. Hashtag sustainable pop-up narwhal, single-origin coffee meditation pickled fanny pack yr tattooed wayfarers."})
var podcast13 = new PodcastModel({title: "Skabberjam", description: "Tacos deep v photo booth williamsburg ennui. Gentrify try-hard green juice, cliche fashion axe bushwick asymmetrical poutine offal."})
var podcast14 = new PodcastModel({title: "Illisum", description: "Photo booth artisan +1, cray cliche brooklyn gentrify trust fund you probably haven't heard of them seitan. Next level brooklyn retro echo park locavore, vegan food truck skateboard 90's tacos."})


var frequencies = [history, music, crime, comedy, beverage, design, science, dance];
var podcasts = [podcast1, podcast2, podcast3, podcast4, podcast5, podcast6, podcast7, podcast8, podcast9, podcast10, podcast11, podcast12];

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
