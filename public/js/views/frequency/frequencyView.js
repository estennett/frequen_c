var FrequencyView = function(frequency){

  this.frequency = frequency;
  var self = this;

  //add divs that contain individual frequency names
  this.$frequencyDiv = $("<div class =  " + frequency.id + "></div>");
  this.render(this.frequency);
  $(".home").append(this.$frequencyDiv);
  //using another view in this file
  var testView = new TestView();

  //click event for showing the FREQUENCY VIEW... hides .frequency DIV and shows .show DIV
  $("div[class = "+ this.frequency.id +"]").on("click", function(){
    self.renderFrequencyShow();

    $('.edit-frequency-button').on('click', function(){
        self.renderEditForm();
    })

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
    self.$frequencyDiv.html(self.frequencyTemplate(self.frequency));
  },

  frequencyTemplate: function(frequency){
    var html = $("<div>");
    html.append("<h3>" + frequency.title + "</h3>");
    return(html);
  },

  renderFrequencyShow: function(){
    var self = this;
    $('.frequencyShow').html(self.frequencyShowTemplate(self.frequency));
    $('.home').hide();
    $('.frequencyShow').show();
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
    html.append("<button class = 'edit-frequency-button'> Edit </button>");
    html.append("<button class = 'create-podcast'> Add a Podcast </button>");
    return(html);
  },
//
  podcastShowTemplate: function(podcast){
    var html = $("<div>");
    html.append("<h3>" + podcast.title + "</h3>");
    html.append("<h3>" + podcast.id + "</h3>");
    html.append("<button class = 'edit-podcast'> Edit </button>");
    return(html)
  },

  renderEditForm: function() {
    var self = this;
    //if the .$editFrequency div doesn't exist already, make it
    if(!self.$editFrequency){
      this.$editFrequency = $("<div class='editFrequency'>")
      var footer = $('footer');
      $(footer).before(this.$editFrequency);
    }
    //shows the edit view
    self.$editFrequency.replaceWith(self.frequencyEditTemplate(this.frequency));
    $('.show').hide();
    $('.editFrequency').show();

    //click event to update a frequency in the edit view
    $(".updateFrequency").on("click", function() {
      self.updateFrequency();
    });

    $(".deleteFrequency").on("click", function() {
      self.frequency.destroy().then(function() { console.log("great it is gone")});
    });
  },

  updateFrequency: function() {
    var self = this;
    var data = {  title: $('input[name = title]').val(),
                  genre: $('input[name = genre]').val()};
    this.frequency.update(data).then(function() {
      //may need to call frequencyShowTemplate
     $('.editFrequency').hide();
     self.renderFrequencyShow();
     console.log()
     });
  },

  renderNewFrequency: function() {
    var self = this;
    //if the .$editFrequency div doesn't exist already, make it
    if(!self.$createNewFrequency){
      this.$createNewFrequency = $("<div class='createNewFrequency'>")
      var footer = $('footer');
      $(footer).before(this.$createNewFrequency);
    }

    self.$createNewFrequency.replaceWith(self.newFrequencyTemplate());
    $("createFrequency").on("click", function(){

    })

  },

  newFrequencyTemplate: function() {
    var html = $("<div class='newFrequency'>");
    html.append("<input name='title'>");
    html.append("<input name='genre'>");
    html.append("<button class='createFrequency'>Create Frequency</button>");
    return(html);
  },

  frequencyEditTemplate: function(frequency) {
    var html = $("<div class='editFrequency'>");
    html.append("<input name='title' value='" + frequency.title + "'>");
    html.append("<input name='genre' value='" + frequency.genre + "'>");
    html.append("<button class='updateFrequency'>Update Frequency</button>");
    html.append("<button class='deleteFrequency'>Delete Frequency</button>");
    return(html);
  }
}
