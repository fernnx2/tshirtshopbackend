let models = require('../models/index')
class CategoryService{

    //get categorys paginate
     findAllPag(pag,lim){
        let limitt=20; //default limit
        if(lim!=null){
            limitt = lim; //set new limit
        }
        let offsett=limitt*(pag-1); //set offset
        return models.category.findAll({offset:offsett,limit:limitt,order:[["category_id"],["name"]]});
        
    }

     count(){
        return  models.category.count();
    }

    //category findById
     findById(category_id) {
            return models.category.findByPk(category_id);
    }

    //categorys from product
     findByCategoryFromProduct(product_Id){
            return  models.sequelize.query('SELECT category.category_id,category.department_id,category.name FROM category join product_category on category.category_id= product_category.category_id where product_category.product_id = :producId',
            {replacements:{producId:product_Id},type: models.sequelize.QueryTypes.SELECT });
    }

     findCategoryByDepartment(departmentId) {
            return  models.category.findAll({where:{department_id:departmentId}});
    }


}

module.exports = CategoryService;