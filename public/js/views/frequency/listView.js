var FrequencyListView = function(el){
  var self = this;
  // self.frequencies = frequencies;
  self.$el = el;
  self.renderAll();

  self.$el.find(".goHome").on("click", function(){
      self.renderAll();
  });

  self.$el.find(".newFrequency").on("click", function(){
    self.toggleNewForm();

    self.$el.find(".createFrequency").on("click", function(){
      self.createFrequency();
      self.$el.find(".newFrequency").hide();
      self.renderAll();
    })
  })
}

FrequencyListView.prototype.renderAll = function() {
  this.$el.find("div.frequency").remove();
  var self=this;
  Frequency.fetch().then(function(results){
    this.frequencies = results;
    results.forEach(function(frequency){
      var itemView = new ItemView(frequency); //pass in parent with self
      self.$el.append(itemView.$el)
    });
  })
}

FrequencyListView.prototype.toggleNewForm = function(){
  var self = this;
  self.$el.find("div.newFrequency").remove();
  var $el = $("<div class='newFrequency'>");
  $el.append("<input name='title'>");
  $el.append("<input name='genre'>");
  $el.append("<button class='createFrequency'>Create Frequency</button>");
  self.$el.append($el);
}

FrequencyListView.prototype.createFrequency = function(){
  var self = this;
  var data = {  title: $('input[name = title]').val(),
                genre: $('input[name = genre]').val()};
  Frequency.prototype.create(data);
}
