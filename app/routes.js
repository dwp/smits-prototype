var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/v*/dosearch/',function(req,res,next)
{
  var v = req.params[0];
  if (req.query.nino == 'QQ123456C') res.redirect('/v'+v+"/person-1?nino=QQ123456C")
  else if (req.query.nino == 'GB654321C') res.redirect('/v'+v+"/person-2?nino=GB654321C")
  else if (req.query.nino == 'ZZ918273C') res.redirect('/v'+v+"/person-3?nino=ZZ918273C")
  else {
    next();
  }
});

router.get('/v*/person*', function (req, res, next) {
  req.data = req.data || { };
  req.data = { nino: req.query.nino };
  next();
})

/*
  Redirect all posts to gets.
*/
router.post(/^\/([^.]+)$/, function (req, res) {
  var path = (req.params[0]);
  res.redirect('/'+path);
});
// add your routes here

module.exports = router
