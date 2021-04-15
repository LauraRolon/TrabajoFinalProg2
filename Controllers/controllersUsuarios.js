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
}

module.exports = controller

//falta comentarios