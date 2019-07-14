module.exports = (sequelize, Sequelize)=>{
    var audit = sequelize.define('audit',{
        audit_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        order_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
        },
        created_on:{
            type:Sequelize.DATE(6),
            allowNull:false
        },
        message:{
            type:Sequelize.TEXT,
            allowNull:false
        },
        code:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    },{
        timestamp:false,
        tableName:'audit',
        engine: 'MYISAM'
    })
    return audit;
}