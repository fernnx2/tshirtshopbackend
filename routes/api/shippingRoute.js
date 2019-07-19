let srrc = require('../../app/resources/shippingResourceController');

module.exports = (app)=>{
    app.get('/shipping/regions',srrc.getShippingRegions);
    app.get('/shipping/regions/:shipping_region_id',srrc.getShippingRegion);
}