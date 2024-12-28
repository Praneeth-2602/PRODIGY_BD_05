// src/models/roomModel.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Room = sequelize.define('Room', {
    roomType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Room;
