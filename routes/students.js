const express = require('express');
const router = express.Router();
const StudentManager = require('../managers/entities/student/Student.manager');
const auth = require('../mws/__token.mw');

router.post('/', auth(['SchoolAdmin', 'Superadmin']), async (req, res) => {
    try {
        const student = await StudentManager.createStudent(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const student = await StudentManager.getStudentById(req.params.id);
        res.json(student);
    } catch (err) {
        res.status(404).json({ error: 'Student not found' });
    }
});

module.exports = router;
