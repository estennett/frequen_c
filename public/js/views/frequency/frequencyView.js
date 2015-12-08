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

  $("div[class = "+ this.frequency.id +"]").on("click", function(){
    frequencyShow.html(self.frequencyShowTemplate(self.frequency));
    $('.frequencies').hide();
    $('.show').show();

    podcast = self.frequency.podcasts;
    $.each( podcast, function( index, pod ){
      // 5665cae5e8e6e21cf97a89f1

      $("div[class = "+ pod.id +"]").on("click", function(){
        console.log(pod.id)
      })
    })


    // var podcast = self.frequency.podcasts;
    // $("div[class = "+ podcast.id +"]").on("click", function(){
    //   console.log("HIIIIII")
    // })



  })

  //add click event for podcasts displayed in frequency show

  // $.each( podcast, function( index, pod ){
    // 5665cae5e8e6e21cf97a89f1

    // $("div[class = "+ pod.id +"]").on("click", function(){
    // })
      // console.log(pod.id)
  // });



  // $(podcast).forEach(function(){
  //   console.log("hi");
  // })
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

  // podcastRender: function(podcast){
  //     console.log(podcast)
  //     $("div[class = " + podcast + "]").on("click", function(){
  //       console.log("hi")
  //     })

    // for ( i = 0; i < podcastShow.length; i++){
    //   // $("div[class = " + podcastShow[i].id + "]").on("click", function(){
    //     console.log(podcastShow[i].id);
    //   // })
    // }
  // },

  frequencyShowTemplate: function(frequency){
    var podcast = frequency.podcasts;
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    // html.append("<p>" + podcast.title+ "</p>");
    for (var i = 0; i < podcast.length; i ++ ){
      html.append("<div class =  " + podcast[i].id + ">" + podcast[i].title + "</div>");
      // html.append("<div>" + podcast[i].title+ "</div>");
      // this.podcastRender(podcast[i].id);
    };
    html.append("<button class = 'create-podcast'> Create </button>");
    html.append("<button class = 'delete-podcast'> Delete </button>");
    return(html);
  },

  podcastShowTemplate: function(frequency){
    var html = $("<div>");
    html.append("<h3>" + podcast.title + "</h3>");
    html.append("<h3>" + podcast.current + "</h3>");
    html.append("<h3>" + podcast.title + "</h3>");
  }

}
