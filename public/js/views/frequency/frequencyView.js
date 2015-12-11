var FrequencyView = function(frequency){
  var self = this;
  self.frequencyShowTemplate();
}

FrequencyView.prototype = {
    frequencyShowTemplate: function(){
      var podcast = frequency.podcasts;
      var html = $("<div>");
      html.append("<h3>" + frequency.title + "</h3>");
      for (var i = 0; i < podcast.length; i ++ ){
        html.append("<div class =  " + podcast[i].id + ">" + podcast[i].title + "</div>");
      };
      html.append("<button class = 'edit-frequency-button'> Edit </button>");
      html.append("<button class = 'create-podcast'> Add a Podcast </button>");
      return(html);
    },
};
