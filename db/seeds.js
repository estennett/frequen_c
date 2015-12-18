require("./schema");
var mongoose = require("mongoose");
var mongodbUri = 'mongodb://localhost/frequency';
var conn = mongoose.connect(process.env.MONGOLAB_URI || mongodbUri);
var FrequencyModel = require("../models/frequency")
var PodcastModel = require("../models/podcast")


FrequencyModel.remove({}, function(err){
  console.log(err)
});
PodcastModel.remove({}, function(err){
  console.log(err)
});

// the code below is good, but technically we should wait to run this code
// until the `remove` methods above have finished, meaning we need to put them
// inside the callbacks, and thus they need to be nested or use promise API
// e.g.
// FrequencyModel.remove({}).then(PodcastModel.remove()).then(doAllTheStuffBelow())
var history = new FrequencyModel({title: "History Buffs", genre: "History"})
var music = new FrequencyModel({title: "Musical Musings", genre: "Music"})
var crime = new FrequencyModel({title: "The Great Outdoors", genre: "Hiking, Camping"})
var comedy = new FrequencyModel({title: "Comedy Nerds", genre: "Comedy, Stand-up"})
var beverage = new FrequencyModel({title: "Let's Talk Drank", genre: "Beer, Wine, Coffee, etc."})
var design = new FrequencyModel({title: "Modern Design", genre: "Interior Design, Web-Design, etc."})
var science = new FrequencyModel({title: "Coding", genre: "Web-development, Programming"})
var dance = new FrequencyModel({title: "Binge-casting", genre: "Serial, StartUp, etc."})
var dance = new FrequencyModel({title: "Harry Potter Lovers", genre: "Harry Potter, Muggles"})



var podcast1 = new PodcastModel({title: "Sit Amet", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Shoreditch health goth narwhal umami, direct trade put a bird on it brunch art party skateboard bicycle rights swag."})
var podcast2 = new PodcastModel({title: "Babble Buzz", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Cardigan kogi taxidermy, microdosing photo booth pinterest seitan banjo health goth."})
var podcast3 = new PodcastModel({title: "Similique Lorem", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description:"Put a bird on it cronut brooklyn, vinyl yr stumptown artisan farm-to-table pug cardigan. Yuccie four dollar toast kinfolk, shabby chic heirloom vegan chartreuse you probably haven't heard of them."})
var podcast4 = new PodcastModel({title: "Babbleset", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description:"Bushwick wayfarers hella tacos, taxidermy bespoke venmo yr etsy swag occupy kinfolk tattooed."})
var podcast5 = new PodcastModel({title: "Realbuzz", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Yr farm-to-table DIY hashtag flexitarian, tacos heirloom hammock yuccie poutine chambray. Cray shabby chic portland chicharrones, pop-up chia YOLO cardigan."})
var podcast6 = new PodcastModel({title: "Brightbean", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "ice dreamcatcher flexitarian, locavore narwhal meggings cold-pressed leggings knausgaard mixtape roof party. 8-bit wolf ethical, taxidermy roof party sriracha cardigan yuccie"})
var podcast7 = new PodcastModel({title: "Skidoo", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Ennui kombucha twee squid cliche, portland pickled pitchfork selvage truffaut bitters blue bottle."})
var podcast8 = new PodcastModel({title: "Edgewire", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Pork belly fashion axe fixie mustache direct trade literally. Leggings austin tattooed bespoke readymade plaid, williamsburg direct trade +1 cray."})
var podcast9 = new PodcastModel({title: "Kwimbee", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description:"Heirloom brunch fixie before they sold out, bitters put a bird on it echo park sustainable tofu VHS direct trade scenester green juice. "})
var podcast10 = new PodcastModel({title: "Blogtags", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Tumblr distillery pickled mlkshk cornhole fashion axe, flannel green juice. Plaid banjo knausgaard +1."})
var podcast11 = new PodcastModel({title: "Thoughtstorm", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description:"Everyday carry 8-bit bitters, quinoa wayfarers thundercats squid meggings authentic wolf chambray pickled blog. Tumblr pickled DIY neutra, health goth celiac cold-pressed."})
var podcast12 = new PodcastModel({title: "Skipfire", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Artisan try-hard venmo put a bird on it asymmetrical, twee neutra offal. Austin twee four dollar toast tacos."})
var podcast13 = new PodcastModel({title: "Laggedsite", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description:"Craft beer skateboard bespoke, asymmetrical poutine polaroid brooklyn try-hard godard master cleanse irony fap YOLO."})
var podcast14 = new PodcastModel({title: "Roobe", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Semiotics cardigan bespoke locavore, cray 90's art party shoreditch. Hashtag sustainable pop-up narwhal, single-origin coffee meditation pickled fanny pack yr tattooed wayfarers."})
var podcast13 = new PodcastModel({title: "Skabberjam", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Tacos deep v photo booth williamsburg ennui. Gentrify try-hard green juice, cliche fashion axe bushwick asymmetrical poutine offal."})
var podcast14 = new PodcastModel({title: "Illisum", audio: "http://www.podtrac.com/pts/redirect.mp3/podcasts.howstuffworks.com/hsw/podcasts/symhc/2015-12-09-symhc-katherine-dexter-mccormick.mp3", description: "Photo booth artisan +1, cray cliche brooklyn gentrify trust fund you probably haven't heard of them seitan. Next level brooklyn retro echo park locavore, vegan food truck skateboard 90's tacos."})


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
