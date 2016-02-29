var mongoose = require('mongoose');

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

module.exports = (function(){
  return {
    find_all: function(req, res){
        Message.find({}).populate('comments').exec(function(err, results){
      		if(err) {
      			console.log('error getting messages and comments');
      			res.redirect('/');
      		} else {
      			console.log('successfully grabbed messages and comments');
            //console.log(results[0].comments[0]);
            console.log(results);
      			res.json({messages: results});
      		}
      	})
    },
    create_message: function(req, res){
      var new_message = new Message({name: req.body.name, message: req.body.message});
       new_message.save(function(err, output){
         if(err){
           console.log("the server messed up and it's brendan's fault")
         } else {
           res.redirect('/get_everything');
           //res.render('index');
         }
       })
    },
    create_comment: function(req, res){
      Message.findOne({_id: req.body._id}, function(err, message){
          if(err){

          }else{
            //console.log(message);
            var comment = new Comment({name: req.body.name, comment: req.body.comment})
            comment._message = message._id;
            message.comments.push(comment);
            comment.save(function(err, comment_res){
              message.save(function(err, message_res){
                console.log(message_res);
                res.redirect('/get_everything');
              })
            })
          }
        })
    }
  }
})();
