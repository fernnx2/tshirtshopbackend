var models = require('../models/index')

class ProductResourceController {


     //page initial
     async findStart(off,lim){
        let offsett=0,limitt=9;
        if(off !=null || lim != null){
            offsett=off;
            limitt=lim;
        }
        let products =await models.product.findAll({limit:limitt,offset:offsett});
        return await products;
    }

    //pagination for 9
    async findAllPag(pag,lim) {
        let limitt=0;
        if(lim!=null){
            limitt=lim;
        }else{
            limitt=9;
        }
        let offsett=limitt*(pag-1);
       
        let products =await models.product.findAll({offset:offsett,limit:limitt});
        return await products;
    }
   
}

module.exports= ProductResourceController;