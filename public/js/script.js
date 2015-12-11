$(document).ready(function(){
  var $freqs = $("<div class= 'frequencies'><button class='btn goHome'>Home</button><button class='btn newFrequencyButton'>New Frequency</button></div>")

  $('header').after($freqs);

  // Frequency.fetch().then(function(frequencies){
    listView = new FrequencyListView($freqs);
// })
})
