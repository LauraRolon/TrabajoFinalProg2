let express = require('express');
let router = express.Router();
let controllersProductsAdd = require('../Controllers/controllersProductsAdd')

/* GET home page. */
router.get('/', controllersProductsAdd.index );
//router.get('/validuser/:user', controllersLogin.validuser );


module.exports = router;