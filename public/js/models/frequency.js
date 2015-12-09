var Frequency = function(info){
  this.title = info.title;
  this.genre = info.genre;
  this.id = info.id;
  this.podcasts = info.podcasts;
};

Frequency.fetch = function(){
  var request = $.getJSON("http://127.0.0.1:4000/frequencies").then(function(response){
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
    var url = "http://127.0.0.1:4000/frequencies/" + this.id;
    var request = $.ajax({
      url: url,
      method: "patch",
      data: JSON.stringify(frequencyData),
      contentType : 'application/json'
    }).then(
      function(updatedFrequencyInfo) {
        self.reload(updatedFrequencyInfo);
      }
    );
    return request;
  },

  create: function(frequencyData){
    console.log(frequencyData)
    var self = this;
    var url = "http://127.0.0.1:4000/frequencies/" + this.id;
    var request = $.ajax({
      url: url,
      method: "post",
      data: JSON.stringify(frequencyData),
      contentType: 'application/json'
    }).then(
      function(newFrequencyInfo){
        self.relaod
      }
    )
  },

  destroy: function(){
    var url = "http://127.0.0.1:4000/frequencies/" + this.id;
    var request = $.ajax( {url: url, method: "delete"} );
    return request;
  },

  reload: function(newData){
    for(var attrname in newData) {
      this[attrname] = newData[attrname];
    }
  }
}
