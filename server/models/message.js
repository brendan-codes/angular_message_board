var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  name: String,
  message: String,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

mongoose.model('Message', messageSchema);

// var Message = mongoose.model('Message');
