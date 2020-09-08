var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('iss', { title: 'Express' });
});

module.exports = router;