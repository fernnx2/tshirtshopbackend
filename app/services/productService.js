var models = require('../models/index')

class ProductService {

     //page initial
     findStart(off,lim){
        let offsett=0,limitt=20; //default values
        if(off !=null || lim != null){
            offsett=off; //set offset
            limitt=lim;  //set limit
        }
        return models.product.findAll({limit:limitt,offset:offsett}); //query get products       
    }

    //pagination for 20
    findAllPag(length,lim,offs) {
       return  models.sequelize.query('call catalog_get_products_on_catalog(:description_length, :limit, :offset)',{
           replacements:{
               description_length:length,
               limit:lim,
               offset:offs
           }
       }) //query get product
        
    }

    //search products catalog 
    productsSearch(_string,_allword=on,_descLength=200,_lim=20,_offs=1){
      return models.sequelize.query('call catalog_search(:string,:allword,:descLength,:lim,:offs)',{
                replacements:{string:_string,allword:_allword,descLength:_descLength,lim:_lim,offs:_offs}
            });
    }

    //find product by Id
    findById(product_id){
       return models.product.findByPk(product_id);
    }

    //find product by category_id
    findByCategoryId(category_id,offs_=1,lim_=3,desc_Length=200){
        return models.sequelize.query('call catalog_get_products_in_category(:categoryId, :descLength,:lim, :offs);',
            {
                replacements:{categoryId:category_id,descLength:desc_Length,lim:lim_,offs:offs_}
            });
    }

    //find product by departmentId err in the producer 
    findByDepartmentId(department_id,offs_=1,lim_=10,desc_Length=200){
            return models.sequelize.query(
                'call catalog_get_products_on_department(:departmentId,:descLength, :offs, :lim )',
     {replacements:{departmentId:department_id,offs:offs_,lim:lim_,descLength:desc_Length}}
            ); 
    }

    //find product details
    getProductDetails(product_id){
        
        return models.sequelize.query('call catalog_get_product_details(:productId)',{
                replacements:{productId:product_id}
            });
    }

    //find product by location
    getProductLocation(product_id){
        return models.sequelize.query('call catalog_get_product_locations(:productId)',{
                replacements:{productId:product_id}
            });
    }

    //find product reviews
    getProductReviews(product_id){
            return models.sequelize.query('call catalog_get_product_reviews(:productId)',{
                replacements:{productId:product_id}
            });
    }

    //save product review
     saveProductReview(id,product){
        return models.sequelize.query('call catalog_create_product_review(:customerId, :productId,:review ,:rating)',{
                replacements:{customerId:product.customer_id,
                              productId:id,
                              review:product.review,
                              rating:product.rating                
                }
            });
    }
   
}

module.exports= ProductService;