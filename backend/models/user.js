module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userId:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }

    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    return User;
};