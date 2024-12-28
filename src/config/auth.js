const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (user) => {
    // You can choose to include additional info like user email or id in the payload.
    const payload = {
        userId: user.id,
        email: user.email,
    };

    // Sign the token with a secret key and set an expiration time (e.g., 1 hour)
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
};

// Verify JWT Token (for protected routes)
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract the token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        // Verify the token with the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = { generateToken, verifyToken };
