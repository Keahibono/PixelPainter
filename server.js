var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var db = require('./models');

app.get('/', function (request, response){
	response.render('Drawings', {title: 'Title'});   ///WTF???
});


app.listen(3000, function() {
  db.sequelize.sync();
});