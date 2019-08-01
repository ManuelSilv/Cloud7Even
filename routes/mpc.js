const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/mpc', function(req, res, next) {
  res.render('mpc');
});


module.exports = router;