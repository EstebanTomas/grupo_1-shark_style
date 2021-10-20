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
            defaultValue: "/img/user_photo/avatar-1631652390083" 
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
    
    const User_Img = sequileze.define( alias, cols, config);

    return User_Img;
}