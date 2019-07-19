let crc = require('../../app/resources/categoryResourceController')

module.exports =(app)=>{

    //pagination
    app.get('/categories/pag/:pag',crc.getCategories);

    //findById
    app.get('/categories/:category_id',crc.getCategory);

    //find categories from producId
    app.get('/categories/inProduct/:product_id',crc.getCategoriesInProduct);

    //find categories from departmentId
    app.get('/categories/inDepartment/:department_id',crc.getCategoriesInDepartment);
}