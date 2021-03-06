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
            references: 'user',
            referencesKey: 'id',
            allowNull: false
        }
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    };
    
    const Order = sequelize.define( alias, cols, config);

    Order.associate = function (models) {
        Order.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "user"
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