module.exports = ( sequelize, DataTypes ) => {

    let alias = "Product_Shop";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: 'products',
            referencesKey: 'id',
            allowNull: false
        },
        amount: {
        // revisar este tipo de dato, no encontre *SMALLINT UNSIGNED*
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: "product_shop",
        timestamps: false
    };
    
    const Product_Shop = sequelize.define( alias, cols, config);

    Product_Shop.associate = function (models) {
        Product_Shop.belongsTo(models.Product, {
            foreignKey: "product_id",
            as: "products"
        });
        Product_Shop.belongsToMany(models.User, {
            as: "userShop",
            through: "shopping",
            foreignKey: "product_shop_id",
            otherKey: "user_id",
            timestamps: false
        });
    }
    return Product_Shop;
}