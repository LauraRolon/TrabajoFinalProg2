  
let express = require('express');
let router = express.Router();


/* GET registration page. */
router.get('/', controllersProductos.index);
router.get('/busqueda/:productos', controllersProductos.busqueda);

module.exports = router;