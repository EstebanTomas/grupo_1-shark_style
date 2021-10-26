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
    
    const Order = sequelize.define( alias, cols, config);

    Order.associate = function (models) {
        Order.hasMany(models.User, {
            foreignKey: "user_id",
            as: "users"
        });
        Order.belongsToMany(models.Product, {
            as: "products",
            through: "product_order",
            foreignKey: "product_id",
            otherKey: "order_id",
            timestamps: false
        });
    }

    return Order;
}