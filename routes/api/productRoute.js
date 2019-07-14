var productResourceController = require('../../app/resources/productResourceController');
var prc = new productResourceController();

module.exports = function(app){
    app.get('/',async (req,res,next)=>{
        let products =await prc.findStart(null,null);
        res.status(200).json(products);
    })

    app.get('/products/:page',async (req,res,next)=>{
        let products = await prc.findAllPag(req.params.page,2);
        res.status(200).json(products);
    });
}