$(document).ready(function() {

  // Search iTunes API for podcasts based on genre
  var searchPodcast = function(search){
    var url = "https://itunes.apple.com/search?term=" + search + "&media=podcast";
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

  // Handle Yahoo Response (callback function)
  var handleResponse = function(response) {
      console.log(response);
      console.log(response.query.results.feed.entry[0].title);
      var text = '', item;
      for (var i = 0, k = response.query.results.feed.entry.length; i < k; i++) {
        item = response.query.results.feed.entry[i];
        text += '<li><a href="' + item.link[0].href + '">' + item.title + '</a></li>';
      }
      $('#episodeDisplay').html(text);
    }

  // Use Yahoo Script to generate episodes
  var injectYahooScript = function(feed) {
    feed = encodeURIComponent(feed);
    // console.log(feed);
    var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + feed + "%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse"
    // console.log(url);
    var scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    console.log(scriptElement);
    scriptElement.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  }

  injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'http%3A%2F%2Fthatsnormal.libsyn.com%2Frss'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleYahooResponse", false);

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

    $("#podcastDisplay").append($el);

    // Add event listener
    $(".podcastEntry").click(function(event){
      var div = $(event.target).closest("div");
      var feedUrl = div.find(".feedUrl").text();
      var widget = episodeWidget(feedUrl);
      widget += "<div style='font-size:10px; text-align:center; width:300px;'><a href='http://feed.mikle.com/' target='_blank' style='color:#CCCCCC;'>RSS Feed Widget</a></div>"
      div.append(widget).then(pickEpisodeButton());
      // pickEpisodeButton();
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
