module.exports = ( sequelize, DataTypes ) => {

    let alias = "ProductShop";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: 'product',
            referencesKey: 'id',
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(100),
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
    
    const ProductShop = sequelize.define( alias, cols, config);

    ProductShop.associate = function (models) {
        ProductShop.belongsTo(models.Product, {
            foreignKey: "product_id",
            as: "product"
        });
        ProductShop.hasMany(models.Shopping, {
            foreignKey: "product_shop_id",
            as: "shopping"
        });

    }
    return ProductShop;
}