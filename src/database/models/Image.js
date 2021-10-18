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
            allowNull: false
        }
    };
    let config = {
        tableName: 'images',
        timestamps: false
    };
    
    const Image = sequileze.define( alias, cols, config);

    return Image;
}