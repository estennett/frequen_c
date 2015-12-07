
var FrequencyShow = function(frequency){
  this.frequency = frequency;
  var self = this;
  this.$el = $("<div class = frequency-show-div ></div>");
  // this.$elshow = $("<div class = frequency-show></div>");
  // this.render(this.frequency);
  // $("body").append(this.$elshow);
  $(".frequencies").append(this.$el);
  $("div[class = "+this.frequency.id +"]").on("click", function(){
    self.$el.html(self.frequencyShowTemplate(self.frequency));

  })
}


FrequencyView.prototype = {
  // render: function(frequency){
  //   var self = this;
    // self.$el.html(self.frequencyTemplate(self.frequency));
  // },

  frequencyShowTemplate: function(frequency){
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    html.append("<p> testing frequency show page </p>")
    html.append("<p>" + frequency.podcasts + "</p>");
    // html.append("<button class = 'create-podcast'> Create </button>");
    // html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  }

}
