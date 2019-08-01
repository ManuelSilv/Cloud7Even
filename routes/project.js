const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/project', function(req, res, next) {
  res.render('project');
});


module.exports = router;