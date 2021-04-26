let productos = require('../data/productos') 

let controllersProductos = { 
    index: function(req, res){  
        res.render('productos',{'productos': productos}); 
    },

    /* list: function(req, res){ //acá igual
        console.log('productos');
        res.render('productos',{'productos': productos});
    }, */

    //para un futuro dinámico
    id: function(req,res){ 
        let id = req.params.id 
        let producto = null
        console.log(productos.lista)
        for(let i=0;i<productos.lista.length;i+=1){
            if(productos.lista[i].id==id){
                producto= productos.lista[i] //acá recorro la lista y me va a traer un solo producto que corresponda a id 
               break //Una vez que encuentro el producto indico que quiero dejar de buscar, cierro el recorrido
            }
        } 
        res.render("productoDetalle", {"productos":producto}) //Esto no se stá renderizando porque la view no existe todavía demanera dinamica
        //res.send(resultados)
    },

    busqueda: (req, res) => {  
        const searchTerm = req.query.search 
        let resultados= productos.lista.filter((p) => { 
            return p.descripcion.includes(searchTerm); 
        });
        
            
            //resultados es = a productos filtrados x una funcion q recibe un elemento y decide si se queda o se va
       // for(let i=0;i<productos.lista.length;i+=1){
       //     if(productos.lista[i].modelo==computadoras){
       //         resultados.push(productos.lista[i])
       //      }
      //  }
        res.render("search-results", { resultados})

    },
};

module.exports = controllersProductos