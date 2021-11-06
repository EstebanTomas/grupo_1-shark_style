module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Image';
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
        product_id: {
            type: DataTypes.INTEGER,
            references: 'products',
            referencesKey: 'id',
            allowNull: false
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    
    const Image = sequelize.define( alias, cols, config);

    Image.associate = function (models) {
        Image.belongsTo(models.Product, {
            foreignKey: "product_id",
            as: "products"
        });
    }

    return Image;
}