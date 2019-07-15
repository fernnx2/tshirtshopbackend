var departmentController = require('../../app/resources/departmentResourceController');
var d = new departmentController(); 
module.exports = function(app){
    app.get('/departments',async (req,res,next)=>{
        var departments =await d.findAll();
            res.json(departments);        
    });
    app.get('/departments/:deparment_id',async (req,res,next)=>{
        var departments =await d.findById(req.params.deparment_id);
            res.json(departments);        
});
}