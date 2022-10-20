//create GETS for all prophecy emotions
const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

const { Prophecy } = require('../../Models');

router.get('/:emotions', async (req, res) => {
    try {
        const dbRes = await Prophecy.findAll({
            where: {
                emotions: req.params.emotions
            }
        });

        const prophecies = dbRes.map(prophecy => prophecy.get({ plain: true }));

        const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];

        res.json(randomProphecy);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});



module.exports = router;