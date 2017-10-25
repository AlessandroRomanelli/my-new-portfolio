var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {path: req.path});
});

router.get('/about', function(req, res, next) {
  res.render('about', {path: req.path});
});

router.get('/project', function(req, res, next) {
  res.render('project', {path: req.path});
});

router.get('/past', function(req, res, next) {
  res.render('past', {path: req.path});
});

router.get('/future', function(req, res, next) {
  res.render('future', {path: req.path});
});

module.exports = router;
