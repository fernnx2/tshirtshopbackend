let models = require('../models/index')

class AttributeResourceController {

    //method get findAllAttributes
    async findAll(){
        try{
            let attributes =await models.attribute.findAll(); 
            return await attributes;
        }catch(err){
            return await err;
        }
    }

    //method get attribute findById
    async findById(attributeId){
        try{
            let attribute = await models.attribute.findByPk(attributeId);
            return attribute;
        }catch(err){
            return await err;
        }
    }

}

module.exports = AttributeResourceController;