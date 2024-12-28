// src/models/bookingModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Booking = sequelize.define('Booking', {
    checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',  // Refers to the User model
            key: 'id',
        },
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Rooms',  // Refers to the Room model
            key: 'id',
        },
    },
});

module.exports = Booking;
