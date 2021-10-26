module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Model';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        colors: {
            type: DataTypes.STRING(150)
        }
    };
    let config = {
        tableName: 'models',
        timestamps: false
    };
    
    const Model = sequelize.define( alias, cols, config);

    Model.associate = function (models) {
        Model.belongsToMany(models.Product, {
            as: "products",
            through: "product_model",
            foreignKey: "product_id",
            otherKey: "model_id",
            timestamps: false
        });
    }

    return Model;
}