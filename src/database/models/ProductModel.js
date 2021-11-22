module.exports = ( sequelize, DataTypes ) => {

    let alias = "ProductModel";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: 'product_model',
            referencesKey: 'id',
            allowNull: false
        },
        model_id: {
            type: DataTypes.INTEGER,
            references: 'models',
            referencesKey: 'id',
            allowNull: false
        },
    };
    let config = {
        tableName: "product_model",
        timestamps: false
    };
    
    const ProductModel = sequelize.define( alias, cols, config);

    ProductModel.associate = function (models) {
        ProductModel.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id",
            constraint: "product_id_2"
        });
        ProductModel.belongsTo(models.Model, {
            foreignKey: "model_id",
            as: "model"
        });
    }

    return ProductModel;
}