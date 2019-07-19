let attributeService = require('../services/attributeService')
let as = new attributeService();


    exports.findAll = (req,res,next)=>{
      as.findAll().then(attributes=>{
          res.json(attributes);
      }).catch(err=>{
          res.json(err);
      });
    }

    exports.findById = (req,res,next)=>{
        as.findById(req.params.attribute_id).then(a=>{
            res.json(a);
        }).catch(err=>{
            res.json(err);
        });
      }

  


