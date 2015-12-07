// View single frequency page
// Contains list of podcasts associated with this frequency (current + archived)

var FrequencyView = function(frequency){
  this.frequency = frequency;
  var self = this;
  this.$el = $("<div class =  " + frequency.id + "></div>");
  // this.$elshow = $("<div class = frequency-show></div>");
  this.render(this.frequency);
  var frequencyShow = $('.show');
  $(".frequencies").append(this.$el);
  $("div[class = "+this.frequency.id +"]").on("click", function(){
    frequencyShow.html(self.frequencyShowTemplate(self.frequency));
    $('.frequencies').hide();
    $('.show').show();
  })
}

FrequencyView.prototype = {
  render: function(frequency){
    var self = this;
    self.$el.html(self.frequencyTemplate(self.frequency));
  },


  frequencyTemplate: function(frequency){
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    // html.append("<p>" + frequency.podcasts + "</p>");
    // html.append("<button class = 'create-podcast'> Create </button>");
    // html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  },

  frequencyShowTemplate: function(frequency){
    var podcast = frequency.podcasts;
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    // html.append("<p>" + podcast.title+ "</p>");
    for (var i = 0; i < podcast.length; i ++ ){
      html.append("<p>" + podcast[i].title+ "</p>");
    };
    html.append("<button class = 'create-podcast'> Create </button>");
    html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  }

}
