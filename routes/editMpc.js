const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/editMpc', function(req, res, next) {
  let sounds = [{location:'sound1', id: 'PadOne'},{location:'sound2', id:'sound3'}]
  res.render('editMpc', {sounds});
});


module.exports = router;