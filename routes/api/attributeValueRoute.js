let attributeValue = require('../../app/resources/attributeValueResourceController');
let av = new attributeValue();

module.exports = (app)=>{

    app.get('/attributes/values/:attribute_id',async (req,res,nex)=>{
        let attributeValues =await av.findByAttibuteId(req.params.attribute_id);
        res.json(attributeValues);
    });

    app.get('/attributes/inProduct/:product_id',async (req,res,nex)=>{
        let attributeValues =await av.findAttributeFromProductId(req.params.product_id);
        res.json(attributeValues);
    });


}