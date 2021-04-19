let express = require('express');
let router = express.Router();
let controllersProfileEdit = require('../Controllers/controllersProfileEdit')

/* GET home page. */
router.get('/', controllersProfileEdit.index );
//router.get('/validuser/:user', controllersLogin.validuser );


module.exports = router;
