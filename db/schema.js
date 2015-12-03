var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var FrequencySchema = new Schema(
  {
    title : String,
    genre : String,
    podcasts : [{type: ObjectId, ref: "Podcast"}]
  }
  //  We probably need these as per tunr_mongo_oojs example, but currently do not understand functionality
  // {
  //   toObject: {virtuals: true},
  //   toJSON: {virtuals: true}
  // }
)

var PodcastSchema = new Schema(
  {
    title : String,
    current : Boolean,
    frequency : {type: ObjectId, ref: "Frequency"}
  }
)

var FrequencyModel = mongoose.model("Frequency", FrequencySchema)
var PodcastModel = mongoose.model("Podcast", PodcastSchema)
