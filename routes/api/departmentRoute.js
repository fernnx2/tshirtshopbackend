var dc = require('../../app/resources/departmentResourceController');

module.exports = (app)=>{
    app.get('/departments',dc.getDepartmens);
    app.get('/departments/:deparment_id',dc.getDepartment);
}