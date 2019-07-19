let avrc = require('../../app/resources/attributeValueResourceController');


module.exports = (app)=>{

    app.get('/attributes/values/:attribute_id',avrc.getAttributeValue);
    app.get('/attributes/inProduct/:product_id',avrc.getProductAttribute);


}