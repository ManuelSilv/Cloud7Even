const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/compressor', function(req, res, next) {
  res.render('compressor');
});


module.exports = router;