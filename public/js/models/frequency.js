var Frequency = function(info){
  this.title = info.title;
  this.genre = info.genre;
  this.id = info.id;
  this.podcasts = info.podcasts;
};

Frequency.fetch = function(){
  var request = $.getJSON("/frequencies").then(function(response){
    var frequencies = [];
    for(var i = 0; i < response.length; i ++){
      frequencies.push(new Frequency(response[i]));
    };
    return frequencies;
  }).fail(function(response){
    console.log("js failed to load");
  });
  return request;
};
