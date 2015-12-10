var PodcastView = function(podcast){
  var self = this;
  self.podcast = podcast;
  self.$el = $("<div class=podcast></div>")
  self.render();
}

PodcastView.prototype = {
  render: function(){
    var self = this;
    var html =$("<h3>" + this.podcast.title + "</h3>");
    $(self.$el).append(html);
    self.$el.on("click", function(){
    self.$el.html("<h4 class = podcast-name>" + "Podcast Name:" + "</h4>"+ self.podcast.title + "<h4 class = podcast-description>" + "Description: " + "</h4>" + self.podcast.description);
    self.$el.siblings(".podcast").hide();
    $('.editFrequency').hide();
    self.renderEditPodcast();
    })
  },
  renderEditPodcast: function(){
    var self = this;
    var $el = $("<button class= btn deletePodcast> Delete Podcast </button>");
    this.$el.append($el);
    this.$el.find($el).on("click", function(){
      console.log("test");
    })
    },


  };

// ("<p>" + Frequen.c Name: + "</p>"
