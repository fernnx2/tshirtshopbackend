var models = require('../models/index')

class ShippingService{

    //get shippings regions
     getShippingRegion(){
            return  models.sequelize.shipping_region.findAll();
    }

    //get shipping region by 
     getShippingRegionById(shipping_region_id){
            return  models.sequelize.shipping_region.findByPk(shipping_region_id);
    }

}

module.exports = ShippingService;