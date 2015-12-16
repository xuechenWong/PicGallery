var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '<h3>XueChen.Wang  Blog</h3>',users:[{username:'Hanson',username:'Todd',username:'Chad'}] });
});

module.exports = router;
