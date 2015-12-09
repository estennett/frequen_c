var EpisodePreviewView = function(episode){
  this.episode = episode;
}

EpisodePreviewView.prototype = {
  render: function(){
    var el = $("<p>" + this.episode.title + "</p>");
    console.log(el);
    return(el)
  }
}
