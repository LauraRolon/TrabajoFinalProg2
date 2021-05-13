let usuarios = require('../data/usuarios')

module.exports = {
    list: function(req, res){
        console.log('usuarios');
        res.render('usuarios',{'usuarios': usuarios});
    },

    id: function(req,res){
        let ids = req.params.id
        let resultados = []
        for(let i=0;i<usuarios.length;i+=1){
            if(usuarios[i].id==ids){
                resultados.push(usuarios[i])
            }
        }
        res.render("usuariosid", {"usuarios":resultados})
    },
    login: function(req, res, next) {  
        res.render('login');
      },
    /* validuser: function(req, res, next){
        let usr = req.params.user
        let pass = req.param.pass //hacer validación acá
        console.log(usr);
        console.log(pass);
        res.render('index'); //cambiar después y mandarlo a otravista con encabezado loggeado
    } */
    registro:(req, res) =>{    
        res.render('registro')
    },
    profile:(req, res) =>{    
        res.render('profile')
    },
    profileEdit:(req, res) =>{    
        res.render('profile-edit')
    }

};


module.exports = controller

//falta comentarios