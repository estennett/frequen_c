var EpisodePreviewView = function(episode){
  this.episode = episode;
  this.$el = $("<div class='episode'></div>");
  this.render();
  var container = $("#individual_episodes");
  container.append(this.$el);
}

EpisodePreviewView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.episodeTemplate(self.episode));

    var addToFrequency = self.$el.find(".btn");

    addToFrequency.on("click", function(){
    console.log(self.episode.title);
    console.log(self.episode.audio);
    console.log(self.episode.description);
    });
  },

  episodeTemplate: function(episode) {
    var text = '';
    text += '<a href="' + episode.audio + '">' + episode.description + '</a>';
    text += '<audio controls><source src="' + episode.audio + '" type="audio/ogg"><source src="' + episode.audio + '" type="audio/mpeg">Your browser does not support the audio tag.</audio>';
    text += '<button class="btn">Add to Frequency</button>'
    return text;
  }
}
