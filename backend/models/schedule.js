module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('Schedule', {
        schedule: {
            type: DataTypes.STRING
        },

    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Schedule.associate = (db) => {
        db.Schedule.belongsToMany(db.Timetable,{through:'timeSchedule'});
    };
    return Schedule;
};