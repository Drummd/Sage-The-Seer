const router = require('express').Router();
const { Prophecy } = require('../Models');
router.get('/', async (req, res) => {
    res.render('login', {
        
    });
});

router.get('/dashboard', async (req, res) => {
    res.render('questions');
});



router.get('/:emotions', async (req, res) => {
    try {
        const dbRes = await Prophecy.findAll({
            where: {
                emotions: req.params.emotions
            }
        });

        const prophecies = dbRes.map(prophecy => prophecy.get({ plain: true }));

        const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];
        console.log(randomProphecy)
        res.render('prophecy', {randomProphecy})
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});





module.exports = router;