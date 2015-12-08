$(document).ready(function(){
  Frequency.fetch().then(function(frequencies){
      var show = new FrequencyShow();
    frequencies.forEach(function(frequency){
      var view = new FrequencyView(frequency)
    })
  })
})
