module.exports = ( sequelize, DataTypes ) => {

    let alias = 'UserImg';
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
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
            references: 'users',
            referencesKey: 'id',
            allowNull: false
        }
    };
    let config = {
        tableName: 'user_img',
        timestamps: false
    };
    
    const UserImg = sequelize.define(alias, cols, config);

    UserImg.associate = function (models) {
        UserImg.belongsTo(models.User, {
            as: "users",
            foreignKey: "user_id",
            constraint: "user_id_3"
        });
    }
    return UserImg;
}