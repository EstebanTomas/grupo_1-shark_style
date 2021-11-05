module.exports = (sequelize, DataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(60),
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

    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.hasMany(models.User_Img, {
            foreignKey: "user_id",
            as: "image"
        });
        User.hasMany(models.Order, {
            foreignKey: "user_id",
            as: "orders"
        });
        User.belongsToMany(models.Product_Shop, {
            as: "productShop",
            through: "shopping",
            foreignKey: "user_id",
            otherKey: "product_shop_id",
            timestamps: false
        });
    }

    return User;
}