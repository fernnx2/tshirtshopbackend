module.exports = (sequelize, Sequelize) => {
    var shipping_region = sequelize.define('shipping_region', {
        shipping_region_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        shipping_region: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'shipping_region',
        engine: 'MYISAM'
    })
    return shipping_region;
}