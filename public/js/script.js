$(document).ready(function(){


    var homeSetup = new HomeSetup();

    //shows home div
    $('.home').show();

    Frequency.fetch().then(function(frequencies){
      frequencies.forEach(function(frequency){
        var view = new FrequencyView(frequency)
    })
  })
})
