const express = require('express');
const router = express.Router();
const ClassroomManager = require('../managers/entities/classroom/Classroom.manager');
const auth = require('../mws/__token.mw');

router.post('/', auth(['SchoolAdmin', 'Superadmin']), async (req, res) => {
    try {
        const classroom = await ClassroomManager.createClassroom(req.body);
        res.status(201).json(classroom);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const classroom = await ClassroomManager.getClassroomById(req.params.id);
        res.json(classroom);
    } catch (err) {
        res.status(404).json({ error: 'Classroom not found' });
    }
});

module.exports = router;
