require("../db/schema");
var mongoose = require("mongoose");
var PodcastModel = mongoose.model("Podcast");

module.exports = PodcastModel;
