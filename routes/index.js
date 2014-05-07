var express = require('express');
var router = express.Router();
var sms = require('../lib/sms');

// Render the home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Home', user: req.user });
});

router.post('/sms', function(req, res) {
  sms.post(req, res);
});

/*
// Render the login page.
router.get('/login', function(req, res) {
  res.render('login', { title: 'Login', error: req.flash('error')[0] });
});


// Logout the user, then redirect to the home page.
router.get('/logout', function(req, res) {
  //req.logout();
  res.redirect('/');
});
*/


module.exports = router;