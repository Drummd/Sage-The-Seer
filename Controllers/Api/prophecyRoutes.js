//create GETS for all prophecy emotions
const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const { Prophecy } = require('../../Models');

router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

///







module.exports = router;