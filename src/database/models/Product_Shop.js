module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Product_Shop';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
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
        tableName: 'product_shop',
        timestamps: false
    };
    
    const Product_Shop = sequileze.define( alias, cols, config);

    return Product_Shop;
}