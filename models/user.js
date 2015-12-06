var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }
});

User.methods.encrypt = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };//need the salting to be synchronous (by default its asynchronous). salting adds extra characters to end of pssword to provide one mroe layer of protection

User.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', User);
