let shippingService = require('../services/shippingService');
let ss = new shippingService();

exports.getShippingRegions = (req,res,next)=>{
    ss.getShippingRegion().then(shippings=>{
        res.json(shippings);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getShippingRegion = (req,res,next)=>{
    ss.getShippingRegionById(req.params.shipping_region_id).then(shippings=>{
        res.json(shippings);
    }).catch(err=>{
        res.json(err);
    })
}