let models = require('../models/index')

class AttributeService {

    //method get findAllAttributes
     findAll(){
           return  models.attribute.findAll();
    }

    //method get attribute findById
     findById(attributeId){
            return models.attribute.findByPk(attributeId);
    }

}

module.exports = AttributeService;