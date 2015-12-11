var ItemView = function (frequency){
//pass in parent into params above
  var self = this;
  // this.parent = parent; references the parent that this view was instantiated in, can call the functions from the parent!
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
    self.$el.find("h3").on("click", function() {
      self.renderShow();
    });
  },
  //show individual frequency render
  renderShow: function(){
    var self = this;
    this.$el.html("<h1 class = podcast_title>" + self.frequency.title + "</h1>" + "<p class = genre_title>" + "Genre: " + self.frequency.genre + "</p>" +  "<h4 class = podcast-li>" + "Podcasts: " + "</h4>" + "<br>")
    self.renderPodcasts();
    self.renderEditPage();
    this.$el.siblings(".frequency").hide();
  },
  //show podcasts inside of frequency
  renderPodcasts: function(){
    var self=this;
    this.$el.find("div.podcast").remove();
    var podcasts = this.frequency.podcasts;
    podcasts.forEach(function(podcast){
      var podcastView = new PodcastView(podcast, self.frequency);
      self.$el.append(podcastView.$el)
    });
  },
  renderEditPage: function(){
    var self = this;
    var html = $("<div class=editFrequency>");
    html.append("<h4>" + "Frequen.c Name: " + "</h4>" + "<input name='title' value='" + this.frequency.title + "'>");
    html.append("<h4>" + "Frequen.c Genre: " + "</h4>" + "<input name='genre' value='" + this.frequency.genre + "'>");
    html.append("<button class='btn updateFrequency'>Update Frequency</button>");
    html.append("<button class='btn deleteFrequency'>Delete Frequency</button>");
    html.append("<button class='btn addPodcast'><a href='/" + this.frequency.id + "/podcast_search'>Add Podcast</a></button>");
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
  }
};
