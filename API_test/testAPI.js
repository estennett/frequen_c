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
