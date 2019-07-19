let departmentService = require('../services/departmentService');
let ds = new departmentService();

exports.getDepartmens = (req,res,next)=>{
    ds.findAll().then(departments =>{
        res.json(departments);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getDepartment = (req,res,next)=>{
    ds.findById(req.params.deparment_id).then(department=>{
        res.json(department);
    }).catch(err=>{
        res.json(err);
    });
}