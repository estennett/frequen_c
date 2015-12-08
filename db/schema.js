var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var CommentSchema = new Schema(
  {
    content : String,
    podcast : {type: ObjectId, ref: "Podcast"},
    user : {type: ObjectId, ref: "User"}
  }
);

var PodcastSchema = new Schema(
  {
    title : String,
    current : Boolean,
    comments : [CommentSchema],
    frequency : {type: ObjectId, ref: "Frequency"}
  }
);

var FrequencySchema = new Schema(
  {
    title : String,
    genre : String,
    podcasts : [PodcastSchema]
  },

  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

FrequencySchema.virtual("id").get(function(){
  return this._id;
});

var UserSchema = new Schema(
  {
  local :
    {
      email: String,
      password: String,
    },
  twitter :
    {
      id: String,
      token: String,
      username: String,
      displayName: String
    },
  frequencies : [FrequencySchema]
}
);

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

UserSchema.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};



var UserModel = mongoose.model("User", UserSchema);
var FrequencyModel = mongoose.model("Frequency", FrequencySchema);
var PodcastModel = mongoose.model("Podcast", PodcastSchema);
var CommentModel = mongoose.model("Comment", CommentSchema);
