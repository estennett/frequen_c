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
  }
}
