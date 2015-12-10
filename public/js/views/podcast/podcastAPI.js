var episodeHeading = function(episodes){
  var heading = "<h3>" + episodes.title + ": Recent Episodes</h3>"
  return heading;
}

var generateEpisodes = function(episodes, podcastName){
  for (var i = 0, k = 10; i < k; i++) {
    item = episodes.entry[i];
    var episode = new EpisodePreview(item.title, item.link[1].href, podcastName);
    new EpisodePreviewView(episode);
  }
}

var generateResults = function(searchResults){
  $.each(searchResults, function(index, podcast) {
    var result = new ResultPreview(podcast);
    new ResultPreviewView(result);
  });
}

// Callback for YQL json response
var handleYahooResponse = function(response) {
  var episodes = response.query.results.feed;
  var text = episodeHeading(episodes);
  generateEpisodes(episodes, episodes.title);
  $('#resultsDisplay').html(text);
}


// Use YQL to receive a json response of the XML feed.
var injectYahooScript = function(feed) {
  feed = encodeURIComponent(feed);
  var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + feed + "'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleYahooResponse"
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('type', 'text/javascript');
  scriptElement.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(scriptElement);
}


$(document).ready(function() {



  // Search iTunes API for podcasts based on genre
  var searchPodcast = function(search){
    var url = "https://itunes.apple.com/search?term=" + search + "&media=podcast&limit=10";
    $.ajax({
        url: url,
        dataType: 'JSONP'
    })
    .done(function(response) {
      generateResults(response.results);
    })
    .fail(function(response) {
      console.log(response);
    })
  }

  // Event Listeners
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#genre").val();
    $("#individual_episodes").html("");
    searchPodcast(input);
  });
});
