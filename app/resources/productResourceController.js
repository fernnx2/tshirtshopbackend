var models = require('../models/index')
var error = require('../../util/Error')
class ProductResourceController {


     //page initial
     async findStart(off,lim){
        let offsett=0,limitt=9; //default values
        if(off !=null || lim != null){
            offsett=off; //set offset
            limitt=lim;  //set limit
        }
        
        try{
        let products =await models.product.findAll({limit:limitt,offset:offsett}); //query get products
        return await products;
        }catch(err){
            error.message = err;
            return error;
        }
        
    }

    //pagination for 9
    async findAllPag(pag,lim) {
        let limitt=0; 
        if(lim!=null){
            limitt=lim; //set limit
        }else{
            limitt=9; //limit default
        }
        let offsett=limitt*(pag-1); //set offset
        try{
        let products =await models.product.findAll({offset:offsett,limit:limitt}); //query get product
        return await products;
        }catch(err){
            error.message = err;
            return error;
        }
        
    }
   
}

module.exports= ProductResourceController;