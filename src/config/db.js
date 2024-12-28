// src/config/db.js
const { Sequelize } = require('sequelize');

// Initialize Sequelize (PostgreSQL database)
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('PostgreSQL connected successfully!');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
