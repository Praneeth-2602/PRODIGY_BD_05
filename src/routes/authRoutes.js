const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Use bcryptjs if you're using it for consistency
const User = require('../models/userModel'); // Assuming you're using Sequelize, importing the User model
const { validateRegister, validateLogin } = require('../middleware/validationMiddleware');
const router = express.Router();

// Register
router.post('/register', validateRegister, async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ where: { email } });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = await User.create({ username, email, password });
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login
router.post('/login', validateLogin, async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error('Error logging in user:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
