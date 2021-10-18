module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Shop';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_shop_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'shopping',
        timestamps: false
    };
    
    const Shop = sequileze.define( alias, cols, config);

    return Shop;
}