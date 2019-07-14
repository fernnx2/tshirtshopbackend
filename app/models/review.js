module.exports = (sequelize, Sequelize)=>{
    var review = sequelize.define('review',{
        review_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        customer_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        product_id:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        review:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        rating:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        created_on:{
            type:Sequelize.DATE(6),
            allowNull:false
        }
    },{
        timestamp:false,
        createdAt:false,
        updatedAt:false,
        tableName:'review',
        engine: 'MYISAM'
    })
    return review;
}