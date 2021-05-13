let express = require('express'); 
let router = express.Router(); 
let controllersProductos = require('../Controllers/controllersProductos') 

/* GET home page. */

router.get('/', controllersProductos.index); 
router.get('/busqueda', controllersProductos.busqueda); 
router.get('/:id', controllersProductos.id); // (Tester)
router.get('/', controllersProductsAdd.index );

module.exports = router; 