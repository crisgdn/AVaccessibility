var express = require('express');
var router = express.Router();

/* GET page listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a video');
});

module.exports = router;

//localhost:3000/video