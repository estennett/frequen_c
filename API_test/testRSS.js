function injectScript(url) {
     var scriptElement = document.createElement('script');
     scriptElement.setAttribute('type', 'text/javascript');
     scriptElement.setAttribute('src', url);
     document.getElementsByTagName('head')[0].appendChild(scriptElement);
   }

  function handleResponse(response) {
    console.log(response);
    console.log(response.query.results.feed.entry[0].title);
    var text = '', item;
    for (var i = 0, k = response.query.results.feed.entry.length; i < k; i++) {
      item = response.query.results.feed.entry[i];
      text += '<li><a href="' + item.link[0].href + '">' + item.title + '</a></li>';
    }
    $('#episodeDisplay').html(text);
  }

$(document).ready(function() {
  injectScript("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20feednormalizer%20where%20url%3D'http%3A%2F%2Fthatsnormal.libsyn.com%2Frss'%20and%20output%3D'atom_1.0'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=handleResponse", false);
});
