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
    Image.associate = (db) => {
        db.Image.hasMany(db.Menu);
    };
    return Image;
};