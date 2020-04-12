module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
        code:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        opTimeOpen:{
            type:DataTypes.STRING
        },
        opTimeClose:{
            type:DataTypes.STRING
        },
        full:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }

    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Admin.associate = (db) => {
        db.Admin.hasMany(db.Menu);
    };
    return Admin;
};