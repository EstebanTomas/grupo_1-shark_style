module.exports = ( sequelize, DataTypes ) => {

    let alias = "Shop";
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
        tableName: "shopping",
        timestamps: false
    };
    
    const Shop = sequelize.define( alias, cols, config);
    // Shop.associate = function (models) {
    //     Shop.belongsToMany(models.User, {
    //         as: "userShopping",
    //         through: "shopping",
    //         foreignKey: "user_id",
    //         otherKey: "product_shop_id",
    //         timestamps: false
    //     });
    // }

    return Shop;
}