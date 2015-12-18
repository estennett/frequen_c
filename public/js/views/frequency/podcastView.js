// should this file be in views/podcasts instead of frequency? just a thought,
// I could see an argument either way

var PodcastView = function(podcast, parent){
  var self = this;
  self.podcast = podcast;
  self.podcastId = podcast.id
  self.parentObject = parent
  self.$el = $("<div class=podcast></div>")
  self.render();
}
//show podcast name and description, hide other elements on page
PodcastView.prototype = {
  render: function(){
    var self = this;
    var html =$("<button class = 'btn podcast_show'>" + this.podcast.title + "</button>");
    $(self.$el).append(html);
    self.$el.on("click", function(){
    self.$el.html("<h4 class = podcast-name>" + "Podcast Name: " + self.podcast.title + "</h4><p class='podcast-description'>Description: " + self.podcast.description + "</p><a href='" + self.podcast.audio + "'><audio controls><source src='" + self.podcast.audio + "' type='audio/ogg'><source src='" + self.podcast.audio + "' type='audio/mpeg'>Your browser does not support the audio tag.</audio></a>");

    self.$el.siblings(".podcast").hide();
    $('.editFrequency').hide();
    $('.podcast-li').hide();
    self.renderEditPodcast();
    })
  },
  renderEditPodcast: function(){
    var self = this;
    var $el = $("<button class= btn deletePodcast> Delete Podcast </button>");
    this.$el.append($el);
    this.$el.find($el).on("click", function(){
      self.parentObject.destroyPodcast(self.podcastId);
    })
  },
};
