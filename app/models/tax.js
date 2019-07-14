module.exports = (sequelize, Sequelize)=>{
    var tax = sequelize.define('tax',{
        tax_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        tax_type:{
            type:Sequelize.STRING(100),
            allowNull:false,
        },
        tax_percentage:{
            type:Sequelize.DECIMAL(10,2),
        }
    },{
        timestamp:false,
        tableName:'tax',
        engine: 'MYISAM'
    })
    return tax;
}