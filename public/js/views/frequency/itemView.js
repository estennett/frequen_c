var ItemView = function (frequency){

  var self = this;

  self.frequency = frequency;
  self.$el = $("<div class=frequency></div");

  self.render();
}

ItemView.prototype = {
  render: function(){
    var self = this;
    var html = $("<h3>" + self.frequency.title + "</h3>");
    $(self.$el).append(html);

    self.$el.on("click", function() {
      self.renderShow();
    });
  },
  renderShow: function(){
    var self = this;
    this.$el.html(self.frequency.title)
    this.$el.siblings(".frequency").hide();
    self.renderPodcasts();
  },
  renderPodcasts: function(){
    var self=this;
    this.$el.find("div.podcast").remove();
    var podcasts = this.frequency.podcasts;

    podcasts.forEach(function(podcast){
      var podcastView = new PodcastView(podcast);
      self.$el.append(podcastView.$el)
    });
  }
}
