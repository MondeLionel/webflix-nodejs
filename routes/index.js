var express = require('express');
var router = express.Router();

/* GET home page. */


// USE CONTROLLERS LATER FOR RE_DO
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
