
var express = require('express');
var controllersUsuarios = require('../Controllers/controllersUsuarios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/', controllersUsuarios.registro );
router.get('/', controllersUsuarios.login );
router.get('/', controllersUsuarios.profile );
router.get('/', controllersUsuarios.profileEdit);

module.exports = router;


//Agrupar acá todo los que tenga que ver con los usuarios