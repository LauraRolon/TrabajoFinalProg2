let express = require('express');
let router = express.Router();
let controllersProductos = require('../Controllers/controllersProductos')

/* GET home page. */
router.get('/', controllersProductos.index);
router.get('/:id', controllersProductos.id)

module.exports = router;