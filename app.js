const express = require('express');
const connectDB = require('./connect/mongo');
const cors = require('cors')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const schoolRoutes = require('./routes/schools');
const classroomRoutes = require('./routes/classrooms');
const studentRoutes = require('./routes/students');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors())
app.use(helmet())

// Rate Limiting: Apply to all requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window (15 minutes)
    message: { error: 'Too many requests from this IP, please try again later' },
});
app.use(limiter);

// Connect Database
connectDB();

// Routes
app.use('/auth', authRoutes);

app.use('/schools', schoolRoutes);
app.use('/classrooms', classroomRoutes);
app.use('/students', studentRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
