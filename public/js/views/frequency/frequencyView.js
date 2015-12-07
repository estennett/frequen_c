// View single frequency page
// Contains list of podcasts associated with this frequency (current + archived)

var FrequencyView = function(frequency){
  this.frequency = frequency;
  this.$el = $("<div class =  " + frequency.id + "></div>");
  this.render(this.frequency);
  $(".frequencies").append(this.$el);
  $("div[class = "+this.frequency.id +"]").on("click", function(){
    console.log("working!")
  })

}

FrequencyView.prototype = {
  render: function(frequency){
    var self = this;
    self.$el.html(self.frequencyTemplate(self.frequency));
    // $("div[class = " + this.frequency.id + "]").on("click", function(){
    //   console.log("test")
    // });
  },


  frequencyTemplate: function(frequency){
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    html.append("<p>" + frequency.podcasts + "</p>");
    html.append("<button class = 'create-podcast'> Create </button>");
    html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  }
};
