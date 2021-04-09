let express = require('express');
let router = express.router();
let bandas = require('../bandas/index');
let controllersProductos = require('');

router.get('/', controller.index);
router.get('/id/:id', controller.byid);
router.get('/genero/:genero',controller.bygenero);

module.exports = router;