var PageSetup = function(){

//puts in a show div
  this.$show = $("<div class= 'home' style= 'display: none' ></div>")
  var footer = $('footer');
  $(footer).before(this.$show);
//puts in a podcast show div
  this.$show = $("<div class= 'showPodcast' style= 'display: none' ></div>")
  var footer = $('footer');
  $(footer).before(this.$show);

//puts in a frequencies DIVthis.$show = $("<div class= 'showPodcast' style= 'display: none' >Show Podcast</div>")
  this.$show = $("<div class= 'frequencyShow' style= 'display: none' ></div>")
  var footer = $('footer');
  $(footer).before(this.$show);

};
