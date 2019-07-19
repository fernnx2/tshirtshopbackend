let orc = require('../../app/resources/ordersResourceController');

module.exports = (app)=>{
    app.post('/orders',orc.saveOrder);
    app.get('/orders/:order_id',orc.getOrderInfo);
    app.get('/orders/inCustomer/:customer_id',orc.getOrderInCustomer);
    app.get('/orders/shortDetail/:order_id',orc.getOrderDetail)
}