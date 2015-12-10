var ItemView = function (frequency){

  var self = this;

  self.frequency = frequency;
  self.$el = $("<div class=frequency></div");

  self.render();
};

ItemView.prototype = {
  //list view render
  render: function(){
    var self = this;
    var html = $("<h3>" + self.frequency.title + "</h3>");
    $(self.$el).append(html);

    self.$el.on("click", function() {
      self.renderShow();
    });
  },
  //show individual frequency render
  renderShow: function(){
    var self = this;
    this.$el.html("Name: " + self.frequency.title + "  Genre: " + self.frequency.genre)
    self.renderPodcasts();
    self.renderEditPage();
    this.$el.siblings(".frequency").hide();
  },
  renderPodcasts: function(){
    var self=this;
    this.$el.find("div.podcast").remove();
    var podcasts = this.frequency.podcasts;
    podcasts.forEach(function(podcast){
      var podcastView = new PodcastView(podcast);
      self.$el.append(podcastView.$el)
    });
  },
  renderEditPage: function(){
    var self = this;
    var html = $("<div class=editFrequency>");
    html.append("<input name='title' value='" + this.frequency.title + "'>");
    html.append("<input name='genre' value='" + this.frequency.genre + "'>");
    html.append("<button class='updateFrequency'>Update Frequency</button>");
    html.append("<button class='deleteFrequency'>Delete Frequency</button>");
    this.$el.append(html);

    self.$el.find(".updateFrequency").on("click", function(){
      self.updateFrequency();
    });

    self.$el.find(".deleteFrequency").on("click", function(){
      self.frequency.destroy().then(function(){
        self.$el.siblings(".frequency").show();
        self.$el.remove();
      })
    })
  },
  updateFrequency: function(){
    var self = this;
    var data = {  title: $('input[name = title]').val(),
                  genre: $('input[name = genre]').val()};
    this.frequency.update(data).then(function() {
    self.renderShow();
    });
  },
};
