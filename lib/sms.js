/*
*Dependencies
*/
var log = require('../log');
var processRouter= require('./automate/processRouter');

/*
*Exports
*/
module.exports = {
  post: function(req, res) {
    processRouter.route('sms', req.body);
    res.send(204);
  }
}
