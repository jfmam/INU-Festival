module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
       shuttle:{
           type:DataTypes.STRING
       },
       lineUp:{
           type:DataTypes.STRING
       }
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    return Image;
};