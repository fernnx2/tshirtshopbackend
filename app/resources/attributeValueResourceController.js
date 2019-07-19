let attributeValueService = require('../services/attributeValueService');
let avs = new attributeValueService();

exports.getAttributeValue = (req,res,next)=>{
       avs.findByAttibuteId(req.params.attribute_id).then(attributeValue =>{
           res.json(attributeValue);
       }).catch(err=>{
        res.status(500).json(err);
       });  
}

exports.getProductAttribute = (req,res,next)=>{
      avs.findAttributeFromProductId(req.params.product_id).then(attributeValue=>{
        res.json(attributeValue);
      }).catch(err=>{
          res.status(500).json(err);
      })
}