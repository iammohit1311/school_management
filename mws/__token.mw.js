// __token.mw.js
const jwt = require('jsonwebtoken');

module.exports = (allowedRoles) => {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: 'Unauthorized' });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // Check if user role matches any of the allowed roles
            if (!allowedRoles.includes(decoded.role)) {
                return res.status(403).json({ error: 'Forbidden' });
            }

            next();
        } catch (err) {
            res.status(401).json({ error: 'Invalid token' });
        }
    };
};
