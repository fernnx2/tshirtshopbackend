var models = require('../models/index')

class ProductResourceController {


     //page initial
     async findStart(off,lim){
        let offsett=0,limitt=20; //default values
        if(off !=null || lim != null){
            offsett=off; //set offset
            limitt=lim;  //set limit
        }
        
        try{
        let products =await models.product.findAll({limit:limitt,offset:offsett}); //query get products
        return await products;
        }catch(err){
            return err;
        }
        
    }

    //pagination for 9
    async findAllPag(pag,lim) {
        let limitt=0; 
        if(lim!=null){
            limitt=lim; //set limit
        }else{
            limitt=20; //limit default
        }
        let offsett=limitt*(pag-1); //set offset
        try{
        let products =await models.product.findAll({offset:offsett,limit:limitt}); //query get product
        return await products;
        }catch(err){
            return err;
        }
        
    }

    //search products catalog 
    async productsSearch(_string,_allword=on,_descLength=200,_lim=20,_offs=1){
        try{
            let catalog =await models.sequelize.query('call catalog_search(:string,:allword,:descLength,:lim,:offs)',{
                replacements:{string:_string,allword:_allword,descLength:_descLength,lim:_lim,offs:_offs}
            });
            return await catalog; 
        }catch(err){
            return await err;
        }
    }

    //find product by Id
    async findById(product_id){
        try{
            let product = await models.product.findByPk(product_id);
            return await product;
        }catch(err){
            return await err;
        }
    }

    //find product by category_id
    async findByCategoryId(category_id,desc_Length=200,lim_=10,offs_=1){
        try{
            let productCategory = await models.sequelize.query('call catalog_get_products_in_category(:categoryId, :descLength,:lim, :offs);',
            {
                replacements:{categoryId:category_id,descLength:desc_Length,lim:lim_,offs:offs_}
            });
            return await productCategory;
        }catch(err){
            return await err;
        }
    }

    //find product by departmentId
    async findByDepartmentId(department_id,desc_Length=200,lim_=10,offs_=1){
        try{
            let productDepartment = await models.sequelize(
                'SELECT     p.product_id, p.name,'+
                'IF(LENGTH(p.description) <= :descLength,'+
                'p.description,'+
                'CONCAT(LEFT(p.description, :descLength),...'+
                ')) AS description,'+
                'p.price, p.discounted_price, p.thumbnail'+
                'FROM product p'+
                'INNER JOIN product_category pc'+
                        'ON p.product_id = pc.product_id'+
                'INNER JOIN category c'+
                        'ON pc.category_id = c.category_id'+
                'WHERE c.department_id = :departmentId'+
                'ORDER BY p.display DESC'+
                'LIMIT :offs, :lim',
     {replacements:{departmentId:department_id,descLength:desc_Length,offs:offs_,lim:lim_}}
            );
        return await productDepartment;
        }catch(err){
            return await err;
        }
    }

    //find product details
    async getProductDetails(product_id){
        try{
            let productDetails =await models.sequelize.query('call catalog_get_product_details(:productId)',{
                replacements:{productId:product_id}
            });
            return await productDetails;
        }catch(err){
            return await productDetails;
        }
    }

    //find product by location
    async getProductLocation(product_id){
        try{
            let productLocation = await models.sequelize.query('call catalog_get_product_locations(:productId)',{
                replacements:{productId:product_id}
            });
            return await productLocation;
        }catch(err){
            return await err;
        }
    }

    //find product reviews
    async getProductReviews(product_id){
        try{
            let productReview = await models.sequelize.query('call catalog_get_product_reviews(:productId)',{
                replacements:{productId:product_id}
            });
            return await productReview;
        }catch(err){
            return await err;
        }
    }

    //save product review
    async saveProductReview(product){
        try{
        return await models.sequelize.query('call catalog_create_product_review(:customerId, :productId,:review ,:rating)',{
                replacements:{customerId:product.customer_id,
                              productId:product.product_id,
                              review:product.review,
                              rating:product.rating                
                }
            });
        }catch(err){
            return err;
        }
    }
   
}

module.exports= ProductResourceController;