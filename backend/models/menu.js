module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        food:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.STRING,
            allowNull: false
        },
        soldOut:{
            type: DataTypes.STRING,
            allowNull: false
        }

    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Menu.associate = (db) => {
        db.Menu.belongsTo(db.Admin);
    };
    return Menu;
};