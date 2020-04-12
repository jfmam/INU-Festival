module.exports = (sequelize, DataTypes) => {
    const Timetable = sequelize.define('Timetable', {
        Date:{
            type:DataTypes.STRING
        },
      
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Timetable.associate = (db) => {
        db.Timetable.hasMany(db.Schedule);
    };
    return Timetable;
};