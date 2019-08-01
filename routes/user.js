const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Express' });
});


module.exports = router;