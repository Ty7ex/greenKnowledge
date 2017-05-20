var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  //res.render("root.jade");
  //var fn = pug.compile('string of pug');
  res.render('index.html');
});

app.get('/hallo', function(req, res) {
  res.render("hallo.jade");
});

app.listen(1337);
