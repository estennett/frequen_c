function injectYahooScript(feed, div) {
  console.log(feed);
  feed = encodeURIComponent(feed);
  console.log(feed);
  var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'" + feed + "'%20and%20output%3D'atom_1.0'&limit=10&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleYahooResponse"
  console.log(url);
  var scriptElement = document.createElement('script');
  scriptElement.setAttribute('type', 'text/javascript');
  scriptElement.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(scriptElement);
}

function handleYahooResponse(response) {
  console.log(response);
  var text = '', item;
  for (var i = 0, k = 10; i < k; i++) {
    item = response.query.results.feed.entry[i];
    text += '<li><a href="' + item.link[0].href + '">' + item.title + '</a>';
    text += '<p>' + item.summary.content + '</p></li>';

    text += '<audio controls><source src="' + item.link[0].href + '" type="audio/ogg"><source src="horse.mp3" type="audio/mpeg">Your browser does not support the audio tag.</audio>'
  }
  $('#episodeDisplay').html(text);
}
