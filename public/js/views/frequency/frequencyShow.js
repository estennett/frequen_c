var FrequencyShow = function(frequency){
  var self = this;
  this.$show = $("<div class= 'show' style= 'display: none' >Show the Show div</div>")
  var body = $('body');
  $(body).append(this.$show);
}
