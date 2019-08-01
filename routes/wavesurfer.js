const express = require('express');
const router = express.Router();


router.get('/wavesurfer', function(req, res, next) {
  res.render('wavesurfer', { title: 'Express' });
});


module.exports = router;