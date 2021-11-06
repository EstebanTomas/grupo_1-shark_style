module.exports = (sequelize, DataTypes) => {

    let alias = "User_Img";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        avatar: {
            type: DataTypes.BLOB(),
            // Definir la foto de perfil que vamos a dejar como default****
            defaultValue: "user_anonimo.jpg"
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: 'users',
            referencesKey: 'id',
            allowNull: false
        }
    };
    let config = {
        tableName: 'user_img',
        timestamps: false
    };
    const User_Img = sequelize.define(alias, cols, config);

    User_Img.associate = function (models) {
        User_Img.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id",
            constraint: "user_id_3"
        })
    }
    return User_Img;
}