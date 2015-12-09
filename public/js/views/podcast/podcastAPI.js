var episodeHeading = function(episodes){
  var heading = "<h3>" + episodes.title + ": Recent Episodes</h3>"
  return heading;
}

var episodeAudio = function(episodeTitle, audioLink) {
  var audio = '<a href="' + audioLink + '">' + episodeTitle + '</a>';
  audio += '<audio controls><source src="' + audioLink + '" type="audio/ogg"><source src="' + audioLink + '" type="audio/mpeg">Your browser does not support the audio tag.</audio>';

  return audio;
}

var episodeEach = function(episodes, podcastName){
  var segment = "<div class='individual_episodes'>";

  for (var i = 0, k = 10; i < k; i++) {
    item = episodes.entry[i];

    segment += "<div class='episode'>"
    if (item.link[1].href) {
      var modelTest1 = new EpisodePreview(item.title, item.link[1].href, podcastName);
      console.log(modelTest1);
      segment += episodeAudio(item.title, item.link[1].href);
    } else if (item.link[0].href) {
      var modelTest2 = new EpisodePreview(item.title, item.link[0].href, podcastName);
      console.log(modelTest2);
      segment += episodeAudio(item.title, item.link[0].href);
    } else if (item.link.href) {
      var modelTest3 = new EpisodePreview(item.title, item.link.href, podcastName);
      console.log(modelTest3);
      segment += episodeAudio(item.title, item.link.href, podcastName);
    }
    segment += "<button class='btn'>Add to Frequency</button></div>"
  }

  segment += "</div>"
  return segment;
}



// Callback for YQL json response
var handleYahooResponse = function(response) {
  console.log(response);
  var episodes = response.query.results.feed;
  var text = episodeHeading(episodes);
  text += episodeEach(episodes, episodes.title);
  text += "</div>";

  $('#podcastDisplay').html("");
  $('#episodeDisplay').html(text);
}

$(document).ready(function() {

  // Use YQL to receive a json response of the XML feed.
  var injectYahooScript = function(feed) {
    feed = encodeURIComponent(feed);
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + feed + "'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleYahooResponse"
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  }

  // Search iTunes API for podcasts based on genre
  var searchPodcast = function(search){
    var url = "https://itunes.apple.com/search?term=" + search + "&media=podcast&limit=10";
    $.ajax({
        url: url,
        dataType: 'JSONP'
    })
    .done(function(response) {
      console.log(response);
      generateList(response.results);
    })
    .fail(function(response) {
      console.log(response);
    })
  }

  var podcastDivCreation = function(podcast) {
    var podcastEntryDiv = "<div class='podcastEntry " + podcast.collectionId + "'>";
    podcastEntryDiv += "<img src='" + podcast.artworkUrl100 + "'>"
    podcastEntryDiv += "<h3 class='artistName'>" + podcast.artistName + "</h3>";
    podcastEntryDiv += "<p class='description'>" + podcast.collectionName + "</p>";
    podcastEntryDiv += "<p class='hide feedUrl'>" + podcast.feedUrl + "</p>";
    podcastEntryDiv += "<p class='genres'>" + podcast.genres.join(", ") + "</p>";
    podcastEntryDiv += "<button class='btn'>View Episodes</button></div>";
    return podcastEntryDiv;
  }

  // Create DOM Elements with podcast search results
  var generateList = function(searchResults){
    var $el = $("<div/>");
    $.each(searchResults, function(index, podcast) {
      console.log(podcast);
      var $preview = podcastDivCreation(podcast);
      $el.append($preview);
    });
    $('#episodeDisplay').html("");
    $("#podcastDisplay").append($el);

    // Add event listener
    $(".podcastEntry").click(function(event){
      var div = $(event.target).closest("div");
      var feedUrl = div.find(".feedUrl").text();
      injectYahooScript(feedUrl);
    });
  }

  // Event Listeners
  $("form").submit(function(event){
    event.preventDefault();
    $("#podcastDisplay").html("");
    var input = $("#genre").val();
    searchPodcast(input);
  });
});
