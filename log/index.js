var Bunyan = require('bunyan');
var log = Bunyan.createLogger({
  name:'man-1'
});

module.exports = log;
