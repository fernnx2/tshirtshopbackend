module.exports = (sequelize, Sequelize) => {
    var department = sequelize.define('department', {
        department_id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING(100),
            validate: {
                is: [
                    "^[a-z]+$", 'i'
                ],
                max: 100,
                min: 1
            },
            allowNull: false,
            notEmpty: true
        },
        description: {
            type: Sequelize.TEXT
        }
    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: 'department',
        engine: 'MYISAM'
    })

    return department;
}
