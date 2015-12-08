
var FrequencyShow = function(frequency){
  this.$show = $("<div class= 'show' style= 'display: none' >Show the Show div</div>")
  var footer = $('footer');
  $(footer).before(this.$show);
}


// FrequencyView.prototype = {
//
//   frequencyShowTemplate: function(frequency){
//     var html = $("<div>");
//     html.append("<h3>" + frequency.title + "</h3>");
//     html.append("<p> testing frequency show page </p>")
//     html.append("<p>" + frequency.podcasts + "</p>");
//     // html.append("<button class = 'create-podcast'> Create </button>");
//     // html.append("<button class = 'delete-podcast'> Delete </button>");
//     return(html);
//   }
//
// }
