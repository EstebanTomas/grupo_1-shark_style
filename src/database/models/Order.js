module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Order';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        date_of_delivery: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    };
    
    const Order = sequileze.define( alias, cols, config);

    return Order;
}