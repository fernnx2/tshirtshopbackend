let categoryResourceController = require('../../app/resources/categoryResourceController')
let crc =new categoryResourceController();
module.exports =async (app)=>{
    app.get('/categories/pag/:pag',async (req,res,next)=>{
        let categories =await crc.findAllPag(req.params.pag,null);
        res.json(categories);
    });
}