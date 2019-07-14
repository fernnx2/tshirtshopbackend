module.exports = (sequelize, Sequelize)=>{
    var category = sequelize.define('category',{
        category_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        department_id:{
            type:Sequelize.INTEGER,
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type: Sequelize.STRING(100),
            allowNull:false,
            notEmpty:true
        },
        description:{
            type: Sequelize.TEXT,
        },
    },{
        timestamp:false,
        createdAt:false,
        updatedAt:false,
        tableName:'category',
        engine: 'MYISAM'
    })
    return category;
}