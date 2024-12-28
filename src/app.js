// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/bookings', bookingRoutes);

// Global error handling middleware
app.use(errorMiddleware);

// src/app.js
const syncDatabase = require('./models');
const PORT = process.env.PORT || 8000;

// Sync database before starting the server
syncDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});

module.exports = app;
