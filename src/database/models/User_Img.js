const User = require("./User");

module.exports = ( sequelize, DataTypes ) => {

    let alias = 'User_Img';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(200),
            // Definir la foto de perfil que vamos a dejar como default****
            defaultValue: "user_anonimo.jpg" 
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'user_img',
        timestamps: false
    };
    const User_Img = sequelize.define( alias, cols, config);

    User_Img.associate = function (models) {
        User_Img.belongsTo(models.User, {
            foreignKey: "user_id",
            as: "users"
        });
    }
    return User_Img;
}