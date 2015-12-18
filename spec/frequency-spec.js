// good job writing some tests! would love to see more, but this is a good start

var frequencyModel = require("../models/frequency.js")
var podcastModel = require("../models/podcast.js")

describe ("A frequency", function(){
  it ("should have a title", function(){
    var frequency = new frequencyModel;
    frequency.title = "Eric";
    //expect frequency to have a title
    //expect frequency's title to be defined
    expect(frequency.title).toEqual(jasmine.any(String));
  });
  it ("should have a genre", function(){
    var frequency = new frequencyModel;
    frequency.genre = "History";
    //expect frequency to have a genre
    //expect frequncy's title to be defined
    expect(frequency.genre).toEqual(jasmine.any(String));
  });
  it ("should have at least one Podcast", function(){
    var frequency = new frequencyModel;
    frequency.podcasts = {title: "hello", current: true};
    //expect frequency to have at least one Podcast
    expect(frequency.podcasts[0]).toBeDefined;
  });
});

describe ("A Frequency called Eric's History", function(){
  var ericHistory = new frequencyModel;
  ericHistory.title = "Eric's History";
  ericHistory.genre = "History";
  it ("it should have the title Eric's History", function(){
    //expect a Frequncy to be called Eric's History to have the title Eric's History
    expect(ericHistory.title).toEqual("Eric's History");
  });
  it ("it should have the genre of History", function(){

    //expect a frequency called Eric's History to have the genre of History
    expect(ericHistory.genre).toEqual("History");
  });
});


describe ("Podcast", function(){

  var frequency = new frequencyModel;
  frequency.podcasts = new podcastModel;

  frequency.podcasts[0].title = "Second Week of December";
  frequency.podcasts[0].current = true;

  // decemberPodcast = new podcastModel;
  // decemberPodcast.title = "Second Week of December";
  // decemberPodcast.current = true;
  it ("should have a title", function(){
    // expect(decemberPodcast.title).toEqual(jasmine.any(String));
    expect(frequency.podcasts[0].title).toEqual(jasmine.any(String));

  });
  it ("should have a current indictation as a Boolean", function(){
    // expect(decemberPodcast.current).toEqual(jasmine.any(Boolean));
    // expect(frequency.podcasts[0].current).toEqual(jasmine.any(Boolean));
    expect(frequency.podcasts[0].current).toBe(true || false);


  });
  // it ("should belong to a Frequency", function(){
  //
  // });
});
//
// describe ("a podcast called Second Week of December", function(){
//   it ("should have the title Second Week of December", function(){
//
//   });
//   it ("should have a current indicator of true", function(){
//
//   });
//   it ("should belong to the Frequency with title Eric's History", function(){
//
//   });
// });
//
// Describe a Frequency
//   it should have a title
//   it should have a genre
//   it should have at least one Podcast
//
//   describe a Frequency called "Eric's History"
//     it should have the title "Eric's History"
//     it should have the genre of "History"
//
// Describe a Podcast
//   it should have a title
//   it should have a current indicator as a Boolean
//   it should belong to a Frequency
//
//   describe a Podcast called "Second Week of December"
//     it should have the title "Second Week of December"
//     it should have a current indicator of "true"
//     it should belong to the Frequency with {title : "Eric's History"}
