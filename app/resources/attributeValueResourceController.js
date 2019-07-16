let models = require('../models/index')

class AttributeValueResourceController {

    async findByAttibuteId(attribute_id){
        try{
            let value =await models.sequelize.query('call catalog_get_attribute_values(:attributeId)',{
                replacements:{attributeId:attribute_id} 
            });
            return await value;
        }catch(err){
            return await err
        }
    }

    async findAttributeFromProductId(product_id){
        try{
            let values = await models.sequelize.query('call catalog_get_product_attributes(:productId);',{
                replacements:{productId:product_id} 
            });
            return await values;
        }catch(err){
            return await err;
        }
    }

}

module.exports = AttributeValueResourceController;