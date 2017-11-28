var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  login: {type: String, required: true},
  password: String,
  courses: [{ type: Schema.ObjectId, ref: 'Course' }]
});
UserSchema.statics.findByLogin = function(lgn,cb) {
  return this.model('User').findOne({ login: lgn }, cb);
}
UserSchema.methods.generateNewPassword = function(cb) {
  this.password = 'new'
  this.save(cb)
}
module.exports =  mongoose.model('User', UserSchema);
