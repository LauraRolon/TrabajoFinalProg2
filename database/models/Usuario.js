module.exports = (sequelize, dataTypes)=>{

    let alias = 'Usuario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            unsigned: true,
        },
        email: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        apellido: {
            type: dataTypes.STRING,
        },
        edad: {
            type: dataTypes.INTEGER,
        },
        password: {
            type: dataTypes.STRING,
        },
       

    };
    let config = {
        table: "usuarios",
        timestamps: false, 
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config) 
    return Usuario;}

    //CONTINUAR ACÁ