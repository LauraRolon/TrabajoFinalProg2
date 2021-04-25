let express = require('express'); //Esto es = a express, seria como el entry point de la librería
let router = express.Router(); //Acá estoy dando acceso a router (que esta dentro de express)
let controllersProductos = require('../Controllers/controllersProductos') //Acá estoy vinxulando para usar el archivo de contollers

/* GET home page. */
//Este router se usa solo cuando el profijo se /productos
router.get('/', controllersProductos.index); //Los routers tienen estados que puedo configurar. Para las request de tipo get, quiero q si la url es nada, ejecutes el controlador index.
router.get('/busqueda', controllersProductos.busqueda); //el path es productos/rutas
router.get('/:id', controllersProductos.id); //Este id es una forma de indicar que ahí va a haber algo con lo que voy a identificar ciertoproducto

module.exports = router; //Esto se hace para que desde app se peueda requerir. 