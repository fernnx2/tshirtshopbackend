let arc= require('../../app/resources/attributeResourceController')

module.exports = (app)=>{

    app.get('/attributes',arc.findAll);
    app.get('/attributes/:attribute_id',arc.findById);
  
}