// utils/logger.js

const winston = require('winston');

// Define the log format
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Create the logger
const logger = winston.createLogger({
    level: 'info', // Set the default log level
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        // Log to the console
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Adds color to the logs in the console
                winston.format.simple() // Format the logs in a simple way
            )
        }),
        // Log to a file
        new winston.transports.File({ filename: 'logs/app.log' }) // Logs will be saved to app.log
    ]
});

module.exports = logger;
