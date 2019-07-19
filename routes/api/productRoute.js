var prc = require('../../app/resources/productResourceController');

module.exports = (app)=>{

    app.get('/products/',prc.getProducts);

    app.get('/products/search',prc.productSearch);

    app.get('/products/:product_id',prc.getProduct);

    app.get('/products/inCategory/:category_id',prc.getProductsInCategory);

    app.get('/products/inDepartment/:department_id',prc.getProductsInDepartment);

    app.get('/products/:product_id/details',prc.getProductDetails);

    app.get('/products/:product_id/location',prc.getProductLocation);
    
    app.get('/products/:product_id/reviews',prc.getProducReviews);

    app.post('/products/:product_id/reviews',prc.seveProducReviews);
    


}