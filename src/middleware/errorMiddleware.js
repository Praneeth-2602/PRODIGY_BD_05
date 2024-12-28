// src/middleware/errorMiddleware.js
const errorMiddleware = (err, req, res, next) => {
    console.error(err.message || err);

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeDatabaseError') {
        return res.status(400).json({ message: 'Database error' });
    }

    return res.status(500).json({ message: 'Server error' });
};

module.exports = errorMiddleware;
