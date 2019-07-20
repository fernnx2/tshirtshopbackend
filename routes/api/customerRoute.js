var crc = require('../../app/resources/customerResourceController');
const validator = require('../../app/middlewares/customerValidation')
const auth = require('../../app/middlewares/authentication')
module.exports = (app)=>{
    app.put('/customer',auth,crc.updateCustomer);
    app.get('/customer/',auth,crc.getCustomer);
    app.post('/customers',validator,crc.saveCustomer);
    app.post('/customers/login',crc.login);
    app.put('/customers/address',auth,crc.updateCustomerAddress);
    app.put('/customers/creditCard',auth,crc.udpateCustomerCreditCard);

}