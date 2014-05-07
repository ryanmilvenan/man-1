var express = require('express');
var app = express();

//CONFIG
app.enable('trust proxy');

var bodyParser = require('body-parser');
app.use(bodyParser());

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

module.exports = {
  app: app,
  server: server
}

//ROUTING
app.get('/', function(req, res) {
  res.send('Hello World');
});

var sms = require('./lib/sms');
app.post('/sms', sms.post);

