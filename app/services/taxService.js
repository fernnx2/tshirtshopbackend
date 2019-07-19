var models = require('../models/index');

class TaxService{


    //get All Tax
     findAll(){
        return  models.tax.findAll();
    }

    //get tax find by tax id
     findById(tax_id){
        return  models.tax.findByPk(tax_id);
    }

}

module.exports = TaxService;