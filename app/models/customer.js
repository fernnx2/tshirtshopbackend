module.exports = (sequelize, Sequelize) => {
    var customer = sequelize.define('customer', {
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        credit_card: {
            type: Sequelize.TEXT,
            validate: {
                isCreditCard: true
            }
        },
        address_1: {
            type: Sequelize.STRING(100)
        },
        address_2: {
            type: Sequelize.STRING(100)
        },
        city: {
            type: Sequelize.STRING(100)
        },
        region: {
            type: Sequelize.STRING(100)
        },
        postal_code: {
            type: Sequelize.STRING(100)
        },
        country: {
            type: Sequelize.STRING(100)
        },
        shipping_region_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        day_phone: {
            type: Sequelize.STRING(100)
        },
        eve_phone: {
            type: Sequelize.STRING(100)
        },
        mob_phone: {
            type: Sequelize.STRING(100)
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'customer',
        engine: 'MYISAM'
    });
    return customer;
}