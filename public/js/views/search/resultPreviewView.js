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
      self.injectYahooScript();
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
  },

  injectYahooScript: function() {
    // Use YQL to receive a json response of the XML feed.
    feed = encodeURIComponent(this.result.feedUrl);
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + feed + "'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleYahooResponse"
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  },
}
