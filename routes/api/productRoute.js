var productResourceController = require('../../app/resources/productResourceController');
var prc = new productResourceController();

module.exports = function(app){
    app.get('/',async (req,res,next)=>{
        let products =await prc.findStart(null,null);
        res.json(products);
    })

    app.get('/products/:page',async (req,res,next)=>{
        let products = await prc.findAllPag(req.params.page,2);
        res.json(products);
    });

    app.get('/products/search',async (req,res,next)=>{
        let products = await prc.productsSearch(req.query.query_string,
                                                req.query.all_words,
                                                req.query.page,
                                                req.query.limit,
                                                req.query.description_length                        
            );
        res.json(products);
    });

    app.get('/products/:product_id',async (req,res,next)=>{
        let products = await prc.findById(req.params.product_id);
        res.json(products);
    });

    app.get('/products/inCategory/:category_id',async (req,res,next)=>{
        let products = await prc.findByCategoryId(req.params.category_id,
                                                req.query.page,
                                                req.query.limit,
                                                req.query.description_length                        
            );
        res.json(products);
    });

    app.get('/products/inDepartment/:department_id',async (req,res,next)=>{
        let products = await prc.findByCategoryId(req.params.department_id,
                                                req.query.page,
                                                req.query.limit,
                                                req.query.description_length                        
            );
        res.json(products);
    });

    app.get('/products/:product_id/details',async (req,res,next)=>{
        let products = await prc.getProductDetails(req.params.product_id);
        res.json(products);
    });

    app.get('/products/:product_id/location',async (req,res,next)=>{
        let products = await prc.getProductLocation(req.params.product_id);
        res.json(products);
    });
    
    app.get('/products/:product_id/reviews',async (req,res,next)=>{
        let products = await prc.getProductReviews(req.params.product_id);
        res.json(products);
    });

    app.post('products/:product_id/reviews', async (req,res,next)=>{
        let response = await prc.saveProductReview(req.body);
        res.status(200).json(response);
    });
    


}