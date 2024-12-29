const express = require('express');
const router = express.Router();
const SchoolManager = require('../managers/entities/school/School.manager');
const auth = require('../mws/__token.mw');

router.post('/', auth('Superadmin'), async (req, res) => {
    try {
        const school = await SchoolManager.createSchool(req.body);
        res.status(201).json(school);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', auth('Superadmin'), async (req, res) => {
    try {
        const school = await SchoolManager.getSchoolById(req.params.id);
        res.json(school);
    } catch (err) {
        res.status(404).json({ error: 'School not found' });
    }
});

module.exports = router;
