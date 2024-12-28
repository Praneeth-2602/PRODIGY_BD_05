// src/routes/roomRoutes.js
const express = require('express');
const Room = require('../models/roomModel');
const { validateRoom } = require('../middleware/validationMiddleware');
const router = express.Router();

// Create room
router.post('/', validateRoom, async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json(room);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all rooms
router.get('/', async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update room
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        await room.update(req.body);
        res.json(room);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete room
router.delete('/:id', async (req, res) => {
    try {
        const room = await Room.findByPk(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        await room.destroy();
        res.json({ message: 'Room deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
