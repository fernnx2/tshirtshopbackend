module.exports = (sequelize, Sequelize) => {
    var orders = sequelize.define('orders', {
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created_on: {
            type: Sequelize.DATE(6),
            allowNull: false
        },
        shipped_on: {
            type: Sequelize.DATE(6)
        },
        comments: {
            type: Sequelize.STRING
        },
        customer_id: {
            type: Sequelize.INTEGER
        },
        auth_code: {
            type: Sequelize.STRING(50)
        },
        reference: {
            type: Sequelize.STRING(50)
        },
        shipping_id: {
            type: Sequelize.INTEGER
        },
        tax_id: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'orders',
        engine: 'MYISAM'
    });
    return orders;
}