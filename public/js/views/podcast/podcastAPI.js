var injectYahooScript = function(feed) {
  feed = encodeURIComponent(feed);
  var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + feed + "'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleYahooResponse"
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('type', 'text/javascript');
  scriptElement.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(scriptElement);
}

var handleYahooResponse = function(response) {
  console.log(response);
  var text = '', item;
  for (var i = 0, k = 10; i < k; i++) {
    item = response.query.results.feed.entry[i];
    text += '<li><a href="' + item.link[0].href + '">' + item.title + '</a>';
    text += '<p>' + item.summary.content + '</p></li>';
    text += '<audio controls><source src="' + item.link[0].href + '" type="audio/ogg"><source src="' + item.link[0].href + '" type="audio/mpeg">Your browser does not support the audio tag.</audio>';
  }
  $('#podcastDisplay').html("");
  $('#episodeDisplay').html(text);
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
      console.log(response);
      generateList(response.results);
    })
    .fail(function(response) {
      console.log(response);
    })
  }

  // Create DOM Elements with podcast search results
  var generateList = function(searchResults){
    var $el = $("<div/>");
    $.each(searchResults, function(index, podcast){
      console.log(podcast);
      var $preview = "<div class='podcastEntry " + podcast.collectionId + "'>";
      $preview += "<p>" + podcast.artistName + "</p>";
      $preview += "<p>" + podcast.collectionName + "</p>";
      $preview += "<p class='hide feedUrl'>" + podcast.feedUrl + "</p>"
      $preview += "<p>" + podcast.genres.join(", ") + "</p>";
      $preview += "<img src=" + podcast.artworkUrl100 + "></div>";
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
