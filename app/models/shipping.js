module.exports = (sequelize, Sequelize) => {
    var shipping = sequelize.define('shipping', {
        shipping_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        shipping_type: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        shipping_cost: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        shipping_region_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'shipping',
        engine: 'MYISAM'
    })
    return shipping;
}