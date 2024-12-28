const Room = require('../models/Room'); // Assuming a Room model is defined
const Booking = require('../models/Booking'); // Assuming a Booking model is defined

// Create a new room listing
exports.createRoom = async (req, res) => {
    const { name, description, price, available_from, available_until } = req.body;

    try {
        const room = new Room({
            name,
            description,
            price,
            available_from,
            available_until,
        });

        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all rooms
exports.getRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single room by ID
exports.getRoomById = async (req, res) => {
    const { roomId } = req.params;

    try {
        const room = await Room.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(room);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update room by ID
exports.updateRoom = async (req, res) => {
    const { roomId } = req.params;
    const { name, description, price, available_from, available_until } = req.body;

    try {
        const room = await Room.findByIdAndUpdate(roomId, {
            name,
            description,
            price,
            available_from,
            available_until,
        }, { new: true });

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.json(room);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a room by ID
exports.deleteRoom = async (req, res) => {
    const { roomId } = req.params;

    try {
        const room = await Room.findByIdAndDelete(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        res.json({ message: 'Room deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
