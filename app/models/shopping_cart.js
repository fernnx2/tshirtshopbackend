module.exports = (sequelize,Sequelize)=>{
    var shopping_cart = sequelize.define('shopping_cart',{
        item_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        cart_id:{
            type:Sequelize.STRING(32),
            allowNull:false
        },
        product_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        attributes:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        quantity:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        buy_now:{
            type:Sequelize.BOOLEAN,
            allowNull:false,
            defaultValue:true
        },
        added_on:{
            type:Sequelize.DATE(6),
            allowNull:false
        }

    },{
        timestamp:false,
        createdAt:false,
        updatedAt:false,
        tableName:'shopping_cart',
        engine: 'MYISAM'
    });
    return shopping_cart;
}