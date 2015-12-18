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
    var data = {
      title: self.episode.title,
      audio: self.episode.audio,
      description: self.episode.description
    }

    addToFrequency.on("click", function(){
      currentURL = window.location.pathname;
      frequencyID = currentURL.match(/\w+/);
      // two thoughts:
      // 1. this could and probably should be accomplished via an ajax request
      // that could then redirect to the home page when it's done, rather than
      // faking out a form.
      // 2. this type of code feels more like it belongs on an EpisodePreview or Frequency
      // model, as a addPodcast instance method.
      $('<form action="/' + frequencyID[0] + '/podcast_search" method="POST">' + '<input type="hidden" name="podcastData" value="' + self.episode.title + '"><input type="hidden" name="podcastData" value="' + self.episode.audio + '"><input type="hidden" name="podcastData" value="' + self.episode.description + '"></form>').submit();
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
