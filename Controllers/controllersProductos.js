let productos = require('../data/productos') //Acá lo que hago es traer data de productos

let controllersProductos = { //acá tengo un obj con muchas funciones
    index: function(req, res){  //res.rendr es una func que va a renderizar lo que setee. Acá pido que al usuario se de devuelva la renderizacion de productos.
        res.render('productos',{'productos': productos}); //Como la infromación es dinámica, con 'productos': productos indico que se va a traer la info de la data que declare arriba
    },

    list: function(req, res){ //acá igual
        console.log('productos');
        res.render('productos',{'productos': productos});
    },

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

    busqueda: (req, res) => {  //estos son dos parametros que vamos a recibir
        const searchTerm = req.query.search //searchTerm es el parametro search dentro de la url y 
        let resultados= productos.lista.filter((p) => { //filtro los productos para otener los resultados
            return p.descripcion.includes(searchTerm); //includes devuleve true or false. Cuando es true me trae los productos de la lista que coincidan con lo ingresado
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