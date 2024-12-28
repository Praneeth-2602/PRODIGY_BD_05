// src/middleware/validationMiddleware.js
const Joi = require('joi');

// Validate user registration
const validateRegister = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
};

// Validate user login
const validateLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
};

// Validate room input
const validateRoom = (req, res, next) => {
    const schema = Joi.object({
        roomType: Joi.string().min(3).required(),
        price: Joi.number().positive().required(),
        location: Joi.string().min(3).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
};

// Validate booking input
const validateBooking = (req, res, next) => {
    const schema = Joi.object({
        userId: Joi.number().positive().required(),
        roomId: Joi.number().positive().required(),
        checkInDate: Joi.date().iso().required(),
        checkOutDate: Joi.date().iso().greater(Joi.ref('checkInDate')).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    next();
};

module.exports = {
    validateRegister,
    validateLogin,
    validateRoom,
    validateBooking,
};
