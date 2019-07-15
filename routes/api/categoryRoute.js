let categoryResourceController = require('../../app/resources/categoryResourceController')
let crc =new categoryResourceController();
module.exports =async (app)=>{

    //pagination
    app.get('/categories/pag/:pag',async (req,res,next)=>{
        let categories =await crc.findAllPag(req.params.pag,null);
        res.json(categories);
    });

    //findById
    app.get('/categories/:category_id',async (req,res,next)=>{
        let categories =await crc.findById(req.params.category_id);
        res.json(categories);
    });

    //find categories from producId
    app.get('/categories/inProduct/:productId',async (req,res,next)=>{
        let categories =await crc.findByCategoryFromProduct(req.params.productId);
        res.json(categories);
    });

    //find categories from departmentId
    app.get('/categories/inDepartment/:departmentId',async (req,res,next)=>{
        let categories =await crc.findCategoryByDepartment(req.params.departmentId);
        res.json(categories);
    });
}