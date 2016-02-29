var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './client/views'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var server = app.listen(9001, function(){
  console.log('listenin on a port over 9000, so 9001');
})
