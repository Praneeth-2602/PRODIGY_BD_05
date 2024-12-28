// src/models/index.js
const { sequelize } = require('../config/db');
const User = require('./userModel');
const Room = require('./roomModel');
const Booking = require('./bookingModel');

// Define relationships
User.hasMany(Booking, { foreignKey: 'userId' });
Booking.belongsTo(User, { foreignKey: 'userId' });

Room.hasMany(Booking, { foreignKey: 'roomId' });
Booking.belongsTo(Room, { foreignKey: 'roomId' });

// Sync database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });  // This will drop and recreate the tables, be careful in production
        console.log('Database synchronized');
    } catch (err) {
        console.error('Error syncing database:', err);
    }
};

module.exports = syncDatabase;
