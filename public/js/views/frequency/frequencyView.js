// View single frequency page
// Contains list of podcasts associated with this frequency (current + archived)

var FrequencyView = function(frequency){
  this.frequency = frequency;
  this.$el = $('<div></div>');
  this.render(this.frequency);
  $(".frequencies").append(this.$el);

}

FrequencyView.prototype = {
  render: function(frequency){
    var self = this;
    self.$el.html(self.frequencyTemplate(self.frequency));
    // var html = $("<div>");
    // html.append("<h3 class = 'frequency_title'>" + frequency.title + "</h3>");
    // $(".frequencies").append(html);
  },


  frequencyTemplate: function(frequency){
    var html = $("<div class =" + frequency.id + "></div>");
    html.append("<h3>" + frequency.title + "</h3>");
    html.append("<p>" + frequency.id + "</p>");
    html.append("<button class = 'create-podcast'> Create </button>");
    html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  }
};
