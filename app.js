var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

//CONFIG
var app = express();
app.enable('trust proxy');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser());
app.use(require('stylus').middleware(path.join(__dirname, './lib/assets')));
app.use(express.static(path.join(__dirname, './lib/assets')));
app.use('/', routes);

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
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
