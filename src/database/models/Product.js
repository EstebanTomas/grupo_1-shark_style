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
    
    const Product = sequileze.define( alias, cols, config);

    return Product;
}