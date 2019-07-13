var departmentController = require('../../app/controllers/departmentController');
var d = new departmentController(); 
module.exports = function(app){
    app.get('/department',async (req,res,next)=>{
            var departments =await d.findAll();
               
                res.status(200).json(departments);        
    });
}