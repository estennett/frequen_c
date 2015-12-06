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

  // Use feedwind widget to show episodes
  var episodeWidget = function(podcastFeed){
    var params = {
      rssmikle_url: podcastFeed,  rssmikle_frame_width: "500",
      rssmikle_frame_height: "0",
      frame_height_by_article: "10",
      rssmikle_target: "_blank",
      rssmikle_font: "Arial, Helvetica, sans-serif",
      rssmikle_font_size: "12",
      rssmikle_border: "off",
      responsive: "off",
      rssmikle_css_url: "",
      text_align: "left",
      text_align2: "left",
      corner: "off",
      scrollbar: "on",
      autoscroll: "off",
      scrolldirection: "up",
      scrollstep: "3",
      mcspeed: "20",
      sort: "Off",
      rssmikle_title: "on",
      rssmikle_title_sentence: "",
      rssmikle_title_link: "",
      rssmikle_title_bgcolor: "#e7bb41",
      rssmikle_title_color: "#FFFFFF",
      rssmikle_title_bgimage: "",
      rssmikle_item_bgcolor: "#FFFFFF",
      rssmikle_item_bgimage: "",
      rssmikle_item_title_length: "55",
      rssmikle_item_title_color: "#000",
      rssmikle_item_border_bottom: "on",
      rssmikle_item_description: "on",
      item_link: "off",
      rssmikle_item_description_length: "150",
      rssmikle_item_description_color: "#666666",
      rssmikle_item_date: "gl1",
      rssmikle_timezone: "Etc/GMT",
      datetime_format: "%b %e %Y %l:%M %p",
      item_description_style: "text+tn",
      item_thumbnail: "full",
      item_thumbnail_selection: "auto",
      article_num: "15",
      rssmikle_item_podcast: "off",
      keyword_inc: "",
      keyword_exc: ""
    };
    return feedwind_show_widget_iframe(params, true);
  }


  // Create DOM Elements with podcast search results
  var generateList = function(searchResults){
    var $el = $("<div/>");
    $.each(searchResults, function(index, podcast){
      console.log(podcast);
      var $preview = "<div class='podcastEntry " + podcast.collectionId + "'>"
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
      div.append(episodeWidget(feedUrl));
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
