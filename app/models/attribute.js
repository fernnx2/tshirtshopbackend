module.exports = (sequelize, Sequelize)=>{
    var attribute= sequelize.define('attribute',{
        attribute_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:Sequelize.STRING(100),
            allowNull:false,
        },
    },{
        timestamp:false,
        createdAt:false,
        updatedAt:false,
        tableName:'attribute',
        engine: 'MYISAM'
    })
    return attribute;
}