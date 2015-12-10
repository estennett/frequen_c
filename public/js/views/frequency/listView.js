var FrequencyListView = function(frequencies, el){
  var self = this;

  self.frequencies = frequencies;
  self.$el = el;

  self.renderAll();

  self.$el.find(".goHome").on("click", function(){
    self.renderAll();
  });


  $(".newFrequency").on("click", function(){
    var newFrequencyView = new NewFrequencyView();
  })


}

FrequencyListView.prototype.renderAll = function() {
  var self=this;
  this.$el.find("div.frequency").remove();

  this.frequencies.forEach(function(frequency){
    var itemView = new ItemView(frequency);
    self.$el.append(itemView.$el)
  });
}
