const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Example user data
const users = [
    { id: 1, username: 'admin', password: 'password123', role: 'Superadmin' },
    { id: 2, username: 'schoolAdmin1', password: 'schoolpass', role: 'schoolAdmin', schoolId: '64a1234567890abc1234efgh' }
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials
    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
    };
    if (user.role === 'schoolAdmin') {
        payload.schoolId = user.schoolId;
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
});

module.exports = router