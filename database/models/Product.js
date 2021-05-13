module.exports = (sequelize, dataTypes)=>{

    let alias = 'Product';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: true,
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DECIMAL
        },
        awards: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id :{
            type: dataTypes.INTEGER
        },

    };
    let config = {
        table: "movies",
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config)
    return Product;}

    //CONTINUAR ACÁ