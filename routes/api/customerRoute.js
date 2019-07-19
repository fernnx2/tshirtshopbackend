var crc = require('../../app/resources/customerResourceController');


module.exports = (app)=>{
    app.put('/customer',crc.updateCustomer);
    app.get('/customer/:customer_id',crc.getCustomer);
    app.post('/customers',crc.saveCustomer);
    app.post('/customers/login',crc.login);
    app.put('/customers/address',crc.updateCustomerAddress);
    app.put('/customers/creditCard',crc.udpateCustomerCreditCard);

}