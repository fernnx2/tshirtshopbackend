module.exports = (sequelize, Sequelize) => {
    'use strict';
    var product = sequelize.define('product', {
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        discounted_price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        image: {
            type: Sequelize.STRING(150)
        },
        image_2: {
            type: Sequelize.STRING(150)
        },
        thumbnail: {
            type: Sequelize.STRING(150)
        },
        display: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'product',
        engine: 'MYISAM'
    });
    return product;
}