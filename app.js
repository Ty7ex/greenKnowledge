var express = require('express');

var app = express();

app.configure(function() {
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render("root.jade");
});

app.get('/hallo', function(req, res) {
  res.render("hallo.jade");
});

app.listen(1337);
