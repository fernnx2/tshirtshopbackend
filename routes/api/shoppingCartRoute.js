let scrc = require('../../app/resources/shoppingCartResourceController')

module.exports = (app)=>{
    app.get('/shoppingcart/generateUniqueId',scrc.getGenerateUniqueId);
    app.post('shoppingcart/add',scrc.shoppingCartAdd);
    app.get('/shoppingcart/:cart_id',scrc.getShoppingCart);
    app.put('/shoppingcart/update/:item_id',scrc.updateShoppingCart);
    app.delete('/shoppingcart/empty/:cart_id',scrc.deleteShoppingCart);
    app.get('/shoppingcart/moveToCart/:item_id',scrc.moveToCart);
    app.get('/shoppingcart/totalAmount/:cart_id',scrc.getTotalAmount);
    app.get('/shoppingcart/saveForLater/:item_id',scrc.saveForLater);
    app.get('/shoppingcart/getSaved/:cart_id',scrc.getSaveProducts);
    app.delete('/shoppingcart/removeProduct/:item_id',scrc.removeProduct);
}