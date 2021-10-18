module.exports = ( sequelize, DataTypes ) => {

    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        role: {
            // revisar este tipo de dato, no encontre *TINYING()*
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    
    const User = sequileze.define( alias, cols, config);

    return User;
}