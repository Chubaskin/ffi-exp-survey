var express = require('express');
var router = express.Router();
// router.use(express.static('public'));

// Módulo para leer encuestas
const mongodb = requiere('mongodb');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
