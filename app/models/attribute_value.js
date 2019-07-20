module.exports = (sequelize, Sequelize) => {
    var attribute_value = sequelize.define('attribute_value', {
        attribute_value_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        attribute_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        value: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }, {
        timestamp: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'attribute_value',
        engine: 'MYISAM'
    })
    return attribute_value;
}