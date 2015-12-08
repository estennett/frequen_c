var PodcastShow = function(frequency){
  var self = this;
  this.$show = $("<div class= 'showPodcast' style= 'display: none' >Show Podcast</div>")
  var footer = $('footer');
  $(footer).before(this.$show);
}
