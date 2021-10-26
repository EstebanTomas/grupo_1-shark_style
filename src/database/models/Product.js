module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    
    const Product = sequelize.define( alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Image, {
            foreignKey: "product_id",
            as: "image"
        });
        Product.belongsTo(models.Size, {
            foreignKey: "product_id",
            as: "size"
        });
        Product.belongsTo(models.Product_Shop, {
            foreignKey: "product_id",
            as: "products_shop"
        });
        Product.belongsToMany(models.Model, {
            as: "models",
            through: "product_model",
            foreignKey: "product_id",
            otherKey: "model_id",
            timestamps: false
        });
        Product.belongsToMany(models.Order, {
            as: "orders",
            through: "product_order",
            foreignKey: "product_id",
            otherKey: "order_id",
            timestamps: false
        });
    }

    return Product;
}