var messages = require('./../controllers/messages.js');

module.exports = function(app){
  app.get('/get_everything', function(req, res){
    messages.find_all(req, res);
  })

  app.post('/message/new', function(req, res){
    messages.create_message(req, res);
  })
  app.post('/comment/new', function(req, res){
    messages.create_comment(req, res);
  })
}
