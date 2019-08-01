const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/mpc2', function(req, res, next) {
  res.render('mpc2');
});


module.exports = router;