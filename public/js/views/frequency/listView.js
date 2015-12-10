var FrequencyListView = function(frequencies, el){
  var self = this;
  self.frequencies = frequencies;
  self.$el = el;
  self.renderAll();
  self.$el.find(".goHome").on("click", function(){
    self.renderAll();
  });

}

FrequencyListView.prototype.renderAll = function() {

  this.$el.find("div.frequency").remove();//what is div.frequency?

  var self=this;
  this.$el.find("div.frequency").remove();


  this.frequencies.forEach(function(frequency){
    var itemView = new ItemView(frequency);
    self.$el.append(itemView.$el)
  });
}
