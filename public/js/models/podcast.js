var Podcast = function(info){
  this.title;
  this.current;
  this.comments;
  this.frequency;
}

//
// title : String,
// current : Boolean,
// comments : [CommentSchema],
// frequency : {type: ObjectId, ref: "Frequency"}
