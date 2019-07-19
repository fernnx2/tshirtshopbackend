let shoppingCartService = require('../services/shoppingCartService');
let scs =new shoppingCartService();

exports.getGenerateUniqueId = (req,res,next)=>{
    res,json(scs.generateCartId);
}

exports.shoppingCartAdd = (req,res,next)=>{
    scs.shoppingCartAddProduct(req.body).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    })
}

exports.getShoppingCart = (req,res,next)=>{
    scs.getShoppingCart(req.params.cart_id).then(cart=>{
        res.json(cart);
    }).catch(err=>{
        res.json(err);
    });
}

exports.updateShoppingCart = (req,res,next)=>{
    scs.updateShoppingCart(req.body).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}

exports.deleteShoppingCart = (req,res,next)=>{
    scs.deleteShoppingCart(req.params.cart_id).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}

exports.moveToCart = (req,res,next)=>{
    scs.moveProductsShoppingCart(req.params.item_id).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getTotalAmount = (req,res,next)=>{
    scs.getTotalAmount(req.params.cart_id).then(amount=>{
        res.json(amount);
    }).catch(err=>{
        res.json(err);
    });
}

exports.saveForLater = (req,res,next)=>{
    scs.getSavedForLater(req.params.item_id).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}

exports.getSaveProducts= (req,res,next)=>{
    scs.getSavedProducts(req.params.cart_id).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}

exports.removeProduct = (req,res,next)=>{
    scs.removeProduct(req.params.item_id).then(resp=>{
        res.json(resp);
    }).catch(err=>{
        res.json(err);
    });
}