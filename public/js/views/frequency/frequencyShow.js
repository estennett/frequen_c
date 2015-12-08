var FrequencyShow = function(frequency){
  this.$show = $("<div class= 'show' style= 'display: none' >Show the Show div</div>")
  var footer = $('footer');
  $(footer).before(this.$show);
}
