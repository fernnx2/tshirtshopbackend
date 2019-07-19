let taxService = require('../services/taxService');
let ts = new taxService();

exports.getAllTax = (req,res,next)=>{
    ts.findAll().then(taxs =>{
        res.json(taxs);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getTax = (req,res,next)=>{
    ts.findById(req.params.tax_id).then(taxs =>{
        res.json(taxs);
    }).catch(err=>{
        res.json(err);
    });
}