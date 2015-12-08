$(document).ready(function(){
  Frequency.fetch().then(function(frequencies){
      var podcastShow = new PodcastShow();
      var show = new FrequencyShow();
    frequencies.forEach(function(frequency){
      var view = new FrequencyView(frequency)
    })
  })
})
