var EpisodePreviewView = function(episode){
  this.episode = episode;
  console.log("EpisodePreviewView Hit");
  this.$el = $("<div class='episode'></div>");
  this.render();
  // var container = document.getElementById("individual_episodes");
  var container = $("h3");
  console.log(container);
  container.append(this.$el);

}

EpisodePreviewView.prototype = {
  render: function(){
    var self = this;
    console.log("EpisodePreviewView render function hit");
    self.$el.html(self.episodeTemplate(self.episode));
    console.log(self.$el);

    var addToFrequency = self.$el.find(".btn");

    addToFrequency.on("click", function(){
      console.log("add to frequency button clicked");
    });
  },

  episodeTemplate: function(episode) {
    console.log("EpisodePreviewView episodeTemplate function hit");
    var text = '';
    text += '<a href="' + episode.audio + '">' + episode.title + '</a>';
    text += '<audio controls><source src="' + episode.audio + '" type="audio/ogg"><source src="' + episode.audio + '" type="audio/mpeg">Your browser does not support the audio tag.</audio>';
    text += '<button class="btn">Add to Frequency</button>'
    console.log(text);
    return text;
  }
}
