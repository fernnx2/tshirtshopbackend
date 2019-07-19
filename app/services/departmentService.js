var models = require('../models/index');

class DepartmentService  {

    findAll(){
            return models.department.findAll();
    }

    findById(department_id){
            return models.department.findByPk(department_id);
    }

} 

module.exports = DepartmentService;