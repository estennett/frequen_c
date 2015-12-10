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
      console.log(self.$el);
      self.$el.html("Name:" + self.podcast.title + "Description: " + self.podcast.description);
      self.$el.siblings(".podcast").hide();
      $('.editFrequency').hide();

    })
  },

  // self.$el.html("<button class='deletePodcast'>Delete Podcast</button>");

  // renderPodcastShow: function(){
  //   var self = this;
  //   var $el = $("<div class = podcastShow></div>")
  //   $el.append("<h3>" + this.podcast.title + "</h3>");
  //   $el.append("<h3>" + this.podcast.description + "</h3>");
  //   this.$el.append($el);
  // },
};
