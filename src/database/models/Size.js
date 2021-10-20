module.exports = ( sequelize, DataTypes ) => {

    let alias = 'Size';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        xs: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        s: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        m: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        l: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        xl: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    };
    let config = {
        tableName: 'sizes',
        timestamps: false
    };
    
    const Size = sequileze.define( alias, cols, config);

    return Size;
}