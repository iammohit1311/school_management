const mongoose = require('mongoose');

// School Schema
const schoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    superadminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

// Classroom Schema
const classroomSchema = new mongoose.Schema({
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    name: { type: String, required: true },
    capacity: { type: Number, required: true },
    resources: [String],
}, { timestamps: true });

// Student Schema
const studentSchema = new mongoose.Schema({
    classroomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    profile: String,
}, { timestamps: true });

module.exports = {
    School: mongoose.model('School', schoolSchema),
    Classroom: mongoose.model('Classroom', classroomSchema),
    Student: mongoose.model('Student', studentSchema),
};
