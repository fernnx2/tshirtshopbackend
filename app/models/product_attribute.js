module.exports = (sequelize, Sequelize) => {
    var product_attribute = sequelize.define('product_attribute', {
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        attribute_value_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'product_attribute',
        engine: 'MYISAM'
    })
    return product_attribute;
}