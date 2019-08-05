var express = require('express');
var router = express.Router();

var msg = {
  hello: '안녕'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about/:name', function(req, res, next) {
  let name = req.params.name || '이름없는 아이';
  res.render('about', { msg, title: '안뇽', name });
});

router.get('/myapi', (req,res,next) => {
  res.json({
    hi: req.query.hi || '안녕하지 않아..',
    hello: 3,
  })
})

module.exports = router;
