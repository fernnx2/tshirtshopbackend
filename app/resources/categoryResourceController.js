let models = require('../models/index')
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
            
            return await err;
        }
    }

    //category findById
    async findById(category_id) {
        try{
            let category = await models.category.findByPk(category_id);
            return await category;
        }
        catch(err){
           
            return await err;
        }
        
    }

    //categorys from product
    async findByCategoryFromProduct(product_Id){
        try{
            let category = await models.sequelize.query('SELECT category.category_id,category.department_id,category.name,category.description FROM category join product_category on category.category_id= product_category.category_id where product_category.product_id = :producId',
            {replacements:{producId:product_Id},type: models.sequelize.QueryTypes.SELECT });
            return await category;
        }catch(err){
            return await err;
        }
    }

    async findCategoryByDepartment(departmentId) {
        try{
            let category = await models.category.findAll({where:{department_id:departmentId}});
            return await category;
        }
        catch(err){
           
            return await err;
        }
        
    }


}

module.exports = CategoryResourceController;