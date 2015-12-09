$(document).ready(function(){
    var pageSetup = new PageSetup();

    //shows home div
    $('.home').show();


    Frequency.fetch().then(function(frequencies){
      frequencies.forEach(function(frequency){
        var view = new FrequencyView(frequency)
    })
  })
})
