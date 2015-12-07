require("../db/schema");
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var UserModel = mongoose.model("User");



module.exports = UserModel
