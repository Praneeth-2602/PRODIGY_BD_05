// src/routes/bookingRoutes.js
const express = require('express');
const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');
const { validateBooking } = require('../middleware/validationMiddleware');
const router = express.Router();

// Create booking
router.post('/', validateBooking, async (req, res) => {
    const { userId, roomId, checkInDate, checkOutDate } = req.body;

    try {
        const room = await Room.findByPk(roomId);
        if (!room || !room.availability) {
            return res.status(400).json({ message: 'Room is not available' });
        }

        const booking = await Booking.create({ userId, roomId, checkInDate, checkOutDate });
        room.availability = false;
        await room.save();

        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
