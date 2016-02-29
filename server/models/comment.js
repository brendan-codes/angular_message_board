var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  name: String,
  comment: String,
  _message: {type: Schema.ObjectId, ref: 'Message'}
})

//var Message = mongoose.model('Message', messageSchema);
var Comment = mongoose.model('Comment', commentSchema);
