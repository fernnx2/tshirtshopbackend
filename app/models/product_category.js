module.exports = (sequelize, Sequelize) => {
    var product_category = sequelize.define('product_category', {
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'product_category',
        engine: 'MYISAM'
    })
    return product_category;
}