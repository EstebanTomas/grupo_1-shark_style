module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Color';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: 'product',
            referencesKey: 'id',
            allowNull: false
        }
    };
    let config = {
        tableName: 'colors',
        timestamps: false
    };
    
    const Color = sequelize.define( alias, cols, config);

    Color.associate = function (models) {
        Color.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id",
            constraint: "product_id_2"
        });
    }

    return Color;
}