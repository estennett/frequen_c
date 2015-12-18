$(document).ready(function(){
  // I'd try to avoid generating so much HTML in here... if it's not dynamic
  // I'd just put it in the base HTML page
  var $freqs = $("<div class= 'frequencies'><button class='btn goHome'>Home</button><button class='btn newFrequencyButton'>New Frequency</button></div>")

  $('header').after($freqs);

  // Again, try not to leave dead code sitting around!
  // Frequency.fetch().then(function(frequencies){
    listView = new FrequencyListView($freqs);
// })
})
