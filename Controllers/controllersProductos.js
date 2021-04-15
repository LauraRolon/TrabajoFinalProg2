let productos = require('../data/productos')

module.exports = {
    list: function(req, res){
        console.log('productos');
        res.render('productos',{'productos': productos});
    },

    id: function(req,res){
        let ids = req.params.id
        let resultados = []
        for(let i=0;i<productos.length;i+=1){
            if(productos[i].id==ids){
                resultados.push(productos[i])
            }
        }
        res.render("productosid", {"productos":resultados})
    },
}

module.exports = controller