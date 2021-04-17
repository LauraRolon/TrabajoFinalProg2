var express = require('express');
const { resource } = require('../app');
const controllersRegistro = require('../Controllers/controllersRegistro');
var router = express.Router();

/* GET home page. */
router.get('/', controllersRegistro.index);

module.exports = router;