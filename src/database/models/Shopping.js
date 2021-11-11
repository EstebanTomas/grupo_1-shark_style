module.exports = ( sequelize, DataTypes ) => {

    let alias = "Shopping";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_shop_id: {
            type: DataTypes.INTEGER,
            references: 'product_shop',
            referencesKey: 'id',
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: 'users',
            referencesKey: 'id',
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "shopping",
        timestamps: false
    };
    
    const Shopping = sequelize.define( alias, cols, config);

    Shopping.associate = function (models) {
        Shopping.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
            constraint: "user_id_2"
        });
        Shopping.belongsTo(models.ProductShop, {
            as: "product_shop",
            foreignKey: "product_shop_id",
        });
    }

    return Shopping;
}