let express = require('express');
let router = express.Router();
let controllersProfile = require('../Controllers/controllersProfile')

/* GET home page. */
router.get('/', controllersProfile.index );
//router.get('/validuser/:user', controllersLogin.validuser );


module.exports = router;