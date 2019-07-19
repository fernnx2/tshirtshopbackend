let trc = require('../../app/resources/taxResourceController');

module.exports = (app)=>{

    app.get('/tax',trc.getAllTax);
    app.get('/tax/:tax_id',trc.getTax);

}