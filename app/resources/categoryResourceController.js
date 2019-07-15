let models = require('../models/index')
let error = require('../../util/Error')
class CategoryResourceController{

   

    
    //get categorys paginate
    async findAllPag(pag,lim){
        var categorys = {
            count:null,
            rows:null,
            status:200
        }
        let limitt=20; //default limit
        if(lim!=null){
            limitt = lim; //set new limit
        }
        let offsett=limitt*(pag-1); //set offset
        try{
            let count =await models.category.count();
            let catgr =await models.category.findAll({offset:offsett,limit:limitt,order:[["category_id"],["name"]]});
            categorys.count = count;
            categorys.rows = catgr;
            return await categorys;
        }catch(err){
            error.message = err;
            return await error;
        }
    }

}

module.exports = CategoryResourceController;