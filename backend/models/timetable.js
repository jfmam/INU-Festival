module.exports = (sequelize, DataTypes) => {
    const Timetable = sequelize.define('Timetable', {
        scheduleDate:{
            type:DataTypes.STRING,
             allowNull:false     
        }, 
        schedule: {
            type: DataTypes.STRING
        }
      
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    return Timetable;
};