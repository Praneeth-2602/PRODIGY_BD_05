const Booking = require('../models/Booking'); // Assuming a Booking model is defined

// Create a booking
exports.createBooking = async (req, res) => {
    const { userId, roomId, checkIn, checkOut } = req.body;

    try {
        // Check room availability
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        if (new Date(checkIn) < new Date(room.available_from) || new Date(checkOut) > new Date(room.available_until)) {
            return res.status(400).json({ message: 'Room is not available for the selected dates' });
        }

        // Create the booking
        const booking = new Booking({
            userId,
            roomId,
            checkIn,
            checkOut,
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await Booking.find({ userId });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
