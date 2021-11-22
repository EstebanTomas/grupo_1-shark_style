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
            type: DataTypes.STRING(200)
        },
        colors: {
            type: DataTypes.STRING(150),
            allowNull: false
        }
    };
    let config = {
        tableName: 'models',
        timestamps: false
    };
    
    const Model = sequelize.define( alias, cols, config);

    Model.associate = function (models) {
        Model.hasMany(models.ProductModel, {
            foreignKey: "model_id",
            as: "product_models"
        });
    }

    return Model;
}