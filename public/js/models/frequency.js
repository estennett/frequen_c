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

Frequency.prototype = {

  update: function(frequencyData) {
    var self = this;
    var url = "/frequencies/" + this.id;
    var request = $.ajax({
      url: url,
      method: "patch",
      data: JSON.stringify(frequencyData),
      contentType : 'application/json'
    }).then(
      // I don't think you need this wrapper function, since you can just
      // reference self.reload here without calling it (and the correct argument)
      // will be passed in by the ajax request
      function(updatedFrequencyInfo) {
        self.reload(updatedFrequencyInfo);
      }
    );
    return request;
  },

  create: function(newFrequencyData) {
    var self = this;
    var url = "/frequencies/";
    var request = $.ajax({
      url: url,
      method: "post",
      data: JSON.stringify(newFrequencyData),
      contentType : 'application/json'
    }).then(function(newFrequency){
        console.log(newFrequency)
    })
  },

  destroy: function(){
    var url = "/frequencies/" + this.id;
    var request = $.ajax( {url: url, method: "delete"} );
    return request;
  },

  destroyPodcast: function(podcastId) {
    var podcastId = podcastId
    var url = "/frequencies/podcast/" + this.id + "/" + podcastId;
    var request = $.ajax( {url: url, method: "delete"} );
    console.log(this.id)
    console.log(podcastId)
    return request;
  },

  reload: function(newData){
    for(var attrname in newData) {
      this[attrname] = newData[attrname];
    }
  }
}
