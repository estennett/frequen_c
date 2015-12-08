// View single frequency page
// Contains list of podcasts associated with this frequency (current + archived)

var FrequencyView = function(frequency){
  this.frequency = frequency;
  var self = this;
  this.$el = $("<div class =  " + frequency.id + "></div>");
  this.$elshow = $("<div class = frequency-show></div>");
  this.render(this.frequency);
  var frequencyShow = $('.show');
  $(".frequencies").append(this.$el);

//click event for showing the FREQUENCY VIEW... hides .frequency DIV and shows .show DIV
  $("div[class = "+ this.frequency.id +"]").on("click", function(){
    frequencyShow.html(self.frequencyShowTemplate(self.frequency));
    $('.frequencies').hide();
    $('.show').show();

//click event for showing the PODCAST VIEW... hides .show DIV and shows .podcast show DIV
    podcast = self.frequency.podcasts;
    $.each( podcast, function( index, pod ){
      $("div[class = "+ pod.id +"]").on("click", function(){
        var podcastShow = $('.showPodcast');
        podcastShow.html(self.podcastShowTemplate(pod));
        $('.show').hide();
        $('.showPodcast').show();

      })
    })

  })
}

FrequencyView.prototype = {
  render: function(frequency){
    var self = this;
    self.$el.html(self.frequencyTemplate(self.frequency));
  },
//This displays all the frequencies on the homepage as a list
  frequencyTemplate: function(frequency){
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    // html.append("<p>" + frequency.podcasts + "</p>");
    // html.append("<button class = 'create-podcast'> Create </button>");
    // html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  },
//This displays when in the .show div to show an individual FREQUENCY
  frequencyShowTemplate: function(frequency){
    var podcast = frequency.podcasts;
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    // html.append("<p>" + podcast.title+ "</p>");
    for (var i = 0; i < podcast.length; i ++ ){
      html.append("<div class =  " + podcast[i].id + ">" + podcast[i].title + "</div>");
    };
    html.append("<button class = 'create-podcast'> Create </button>");
    html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  },
//
  podcastShowTemplate: function(podcast){
    var html = $("<div>");
    html.append("<h3>" + podcast.title + "</h3>");
    html.append("<h4 class = 'podcast-description'>" + podcast.description + "</h3");
    html.append("<h3>" + podcast.id + "</h3>");
    return(html)
  }

}
