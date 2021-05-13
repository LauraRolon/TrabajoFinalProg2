let controllersLogin = {
    login: function(req, res, next) {  
        res.render('login');
      },
    validuser: function(req, res, next){
        let usr = req.params.user
        let pass = req.param.pass //hacer validación acá
        console.log(usr);
        console.log(pass);
        res.render('index'); //cambiar después y mandarlo a otravista con encabezado loggeado
    }
};

module.exports = controllersLogin