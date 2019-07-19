let models = require('../models/index')

class AttributeValueService {

    findByAttibuteId(attribute_id){
       
            return models.sequelize.query('call catalog_get_attribute_values(:attributeId)',{
                replacements:{attributeId:attribute_id} 
            });
      
    }

    findAttributeFromProductId(product_id){
       
            return  models.sequelize.query('call catalog_get_product_attributes(:productId);',{
                replacements:{productId:product_id} 
            });
          
    }

}

module.exports = AttributeValueService;