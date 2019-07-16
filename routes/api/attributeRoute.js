let attributeResourceController = require('../../app/resources/attributeResourceController')
let attribute = new attributeResourceController();

module.exports = (app)=>{

    app.get('/attributes',async (req,res,nex)=>{
        let attributes =await attribute.findAll();
        res.json(attributes);
    });

    app.get('/attributes/:attribute_id',async (req,res,nex)=>{
        let attributes =await attribute.findById(req.params.attribute_id);
        res.json(attributes);
    });


}