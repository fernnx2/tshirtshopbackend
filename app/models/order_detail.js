module.exports = (sequelize, Sequelize)=>{
    var order_detail = sequelize.define('order_detail',{
        item_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        order_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        product_id:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        attributes:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        product_name:{
            type:Sequelize.STRING(100),
            allowNull:false
        },
        quantity:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        unit_cost:{
            type:Sequelize.DECIMAK(10,2),
            allowNull:false
        },
    },{
        timestamp:false,
        tableName:'order_detail',
        engine: 'MYISAM'
    });
    return order_detail;
}