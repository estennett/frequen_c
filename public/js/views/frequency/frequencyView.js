// View single frequency page
// Contains list of podcasts associated with this frequency (current + archived)

var FrequencyView = function(frequency){
  this.frequency = frequency;
  this.$el = $('<div class="frequency"></div>');
  $(".frequencies").append(this.$el);
  this.render(this.frequency);
}

FrequencyView.prototype = {
  render: function(frequency){
    var self = this;
    var html = $("<div>");
    html.append("<h3 class = 'frequency_title'>" + frequency.title + "</h3>");
    $(".frequencies").append(html);
  }
}
