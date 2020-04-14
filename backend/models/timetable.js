module.exports = (sequelize, DataTypes) => {
    const Timetable = sequelize.define('Timetable', {
        scheduleDate:{
            type:DataTypes.STRING,
             primaryKey:true,
             allowNull:false     
        }, 
        schedule: {
            type: DataTypes.STRING
        }
      
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Timetable.associate = (db) => {
        db.Timetable.belongsToMany(db.Schedule,{through:'timeSchedule'});
    };
    return Timetable;
};