var ResultPreviewView = function(result){
  this.result = result;
  this.$el = $("<div class='result podcastEntry'></div>");
  this.render();
  var container = $("#resultsDisplay");
  container.append(this.$el);
}

ResultPreviewView.prototype = {
  render: function() {
    var self = this;
    self.$el.html(self.resultTemplate(self.result));

    var viewEpisodesButton = self.$el.find(".btn");
    viewEpisodesButton.click(function(event){
      injectYahooScript(self.result.feedUrl);
    });
  },

  resultTemplate: function() {
    var resultDiv = "<img src='" + this.result.artwork + "'>"
    resultDiv += "<h3 class='artistName'>" + this.result.artistName + "</h3>";
    resultDiv += "<p class='description'>" + this.result.collectionName + "</p>";
    resultDiv += "<p class='hide feedUrl'>" + this.result.feedUrl + "</p>";
    resultDiv += "<p class='genres'>" + this.result.genres.join(", ") + "</p>";
    resultDiv += "<button class='btn'>View Episodes</button></div>";
    return resultDiv;
  }
}
