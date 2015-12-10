var NewFrequencyView = function(){
  var self = this;

  self.renderNewFrequencyForm();
}

NewFrequencyView.prototype = {
  renderNewFrequencyForm: function(){
    var self = this;
    $('.newFrequencyForm').remove();

    var html = $("<div class=newFrequencyForm></div>");
    html.append("<input name='title'>");
    html.append("<input name='genre'>");
    html.append("<button class='createFrequency'>Create Frequency</button>");
    $('.frequencies').append(html);

    $('.createFrequency').on("click", function(){
      self.createFrequency();
    })
  },
  createFrequency: function(){
    var self = this;
    var data = {  title: $('input[name = title]').val(),
                  genre: $('input[name = genre]').val()};
    Frequency.prototype.create(data).then(function(){
      console.log("created")
    })
  }
}
