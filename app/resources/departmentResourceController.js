
var models = require('../models/index');

class DepartmentController  {

    async findAll(){
     let departments = await models.department.findAll();
     return await departments;
    }

} 



module.exports = DepartmentController;