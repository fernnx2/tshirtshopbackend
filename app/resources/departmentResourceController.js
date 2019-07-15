var models = require('../models/index');
var error = require('../../util/Error')

class DepartmentController  {

    async findAll(){
        try{
            let departments = await models.department.findAll();
            return await departments;
        }catch(err){
            error.message = err;
            return await error;
        }
    
    }

    async findById(department_id){
        try{
            let department = await models.department.findByPk(department_id);
            return department
        }catch(err){
            error.message = err;
            return await error;
        }

       
    }

} 



module.exports = DepartmentController;