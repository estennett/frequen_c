$(document).ready(function(){
  var $freqs = $("<div class= 'frequencies'><button class='goHome'>Go Home E.T.</button><button class='newFrequencyButton'>New Frequency</button></div>")

  var footer = $('footer');
  $(footer).before($freqs);

  // Frequency.fetch().then(function(frequencies){
    listView = new FrequencyListView($freqs);
// })
})
