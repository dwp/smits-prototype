var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/v1/person', function (req, res, next) {
  req.data = req.data || { };
  req.data = { nino: req.query.nino };
  next();
})

// add your routes here

module.exports = router
