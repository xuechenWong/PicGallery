var express = require('express');
var demo = express.Router();

/* GET demo page. */
demo.get('/', function(req, res, next) {
  res.render('demo', { title: '照片轮播'});
});
module.exports = demo;
