let productos = require('../data/productos')

let controllersProductos = {
    index: function(req, res){
        res.render('productos',{'productos': productos});
    },

    list: function(req, res){
        console.log('productos');
        res.render('productos',{'productos': productos});
    },

    id: function(req,res){
        let ids = req.params.id
        let resultados = []
        console.log(productos.lista)
        for(let i=0;i<productos.lista.length;i+=1){
            if(productos.lista[i].id==ids){
                resultados.push(productos.lista[i])
               
            }
        } 
        res.render("productoDetalle", {"productos":resultados})
        //res.send(resultados)
    },
}

module.exports = controllersProductos