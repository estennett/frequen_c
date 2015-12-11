$(document).ready(function(){
  var $freqs = $("<div class= 'frequencies'><button class='btn goHome'>Go Home E.T.</button><button class='btn newFrequencyButton'>New Frequency</button></div>")

  var footer = $('footer');
  $(footer).before($freqs);

  // Frequency.fetch().then(function(frequencies){
    listView = new FrequencyListView($freqs);
// })
})
