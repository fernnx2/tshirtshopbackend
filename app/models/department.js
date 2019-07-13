module.exports = (sequelize, Sequelize) =>{
    var department = sequelize.define('department',{
        department_id:{
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:{
            type: Sequelize.STRING,
            notEmpty:true
        },
        description:{
            type: Sequelize.TEXT,
        },
       
    },{
        timestamps:false
    })
    
    return department;
}

