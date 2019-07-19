let categoryService = require('../services/categoryService');
let cs = new categoryService();

exports.getCategories =(req,res,next)=>{
    let categories = {
        count:null,
        rows:null,
        status:200
    }
    cs.count().then(count=>{
        categories.count=count;
    });
    cs.findAllPag(req.params.pag,null).then(category=>{
        categories.rows = category;
        res.json(categories)
    }).catch(err=>{
        res.status(500).json(err);
    });          
}

exports.getCategory = (req,res,next)=>{
    cs.findById(req.params.category_id).then(category =>{
        res.json(category);
    }).catch(err=>{
        res.status(500).json(err);
    });
}

exports.getCategoriesInProduct = (req,res,next)=>{
    cs.findByCategoryFromProduct(req.params.product_id).then(categories=>{
        res.json(categories);
    }).catch(err=>{
        res.status(500).json(err);
    })
}

exports.getCategoriesInDepartment = (req,res,next)=>{
    cs.findCategoryByDepartment(req.params.department_id).then(categories=>{
        res.json(categories);
    }).catch(err=>{
        res.status(500).json(err);
    })
}

