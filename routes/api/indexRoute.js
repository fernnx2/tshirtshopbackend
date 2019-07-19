module.exports = function(app){
    require('./attributeRoute')(app);
    require('./attributeValueRoute')(app);
    require('./categoryRoute')(app);
    require('./customerRoute')(app);
    require('./departmentRoute')(app);
    require('./ordersRoute')(app);
    require('./productRoute')(app);
    require('./shippingRoute')(app);
    require('./shoppingCartRoute')(app);
    require('./taxRoute')(app);    
}