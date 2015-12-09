var FrequencyListView = function(frequencies, el){
  var self = this;

  self.frequencies = frequencies;
  self.$el = el;

  console.log(self.$el);

  self.$el.find(".goHome").on("click", function(){
    self.renderAll()
  });

  self.renderAll();
}

FrequencyListView.prototype.renderAll = function() {
  this.$el.find("div.frequency").remove();

  this.frequencies.forEach(function(frequency){
    var view = new FrequencyView(frequency);
    view.$el.appendTo(this.$el);
  });
}
