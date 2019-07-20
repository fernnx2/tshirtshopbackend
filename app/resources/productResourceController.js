let productService = require('../services/productService')
let ps = new productService();

exports.getProducts = (req,res,next)=>{
    //Starting params 200,20,1
    ps.findAllPag(req.query.description_length,
        req.query.limit,
        req.query.page).then(products=>{
        res.json(products);
    }).catch(err=>{
        res.json(err);
    })
}

exports.productSearch = (req,res,next)=>{
    ps.productsSearch(req.query.query_string,req.query.all_words,
        req.query.page,req.query.limit,req.query.description_length).then(products=>{
            res.json(products);
        }).catch(err=>{
            res.json(err);
        });
}

exports.getProduct = (req,res,next)=>{
    ps.findById(req.params.product_id).then(product=>{
        res.json(product);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getProductsInCategory = (req,res,next)=>{
    ps.findByCategoryId(req.params.category_id,req.query.page,req.query.limit,
        req.query.description_length).then(products=>{
        res.json(products);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getProductsInDepartment = (req,res,next)=>{
    ps.findByDepartmentId(req.params.department_id,req.query.page,req.query.limit,
        req.query.description_length).then(products=>{
        res.json(products);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getProductDetails = (req,res,next)=>{
    ps.getProductDetails(req.params.product_id).then(product=>{
        res.json(product);
    }).catch(err=>{
        res.json(err);
    })
}


exports.getProductLocation = (req,res,next)=>{
    ps.getProductLocation(req.params.product_id).then(product=>{
        res.json(product);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getProducReviews = (req,res,next)=>{
    ps.getProductReviews(req.params.product_id).then(product=>{
        res.json(product);
    }).catch(err=>{
        res.json(err);
    })
}


exports.saveProducReviews = (req,res,next)=>{
    console.log(req);

        ps.saveProductReview(req.params.product_id,req.body).then(product=>{
            res.json(product);
        }).catch(err=>{
            res.json(err);
        });
}