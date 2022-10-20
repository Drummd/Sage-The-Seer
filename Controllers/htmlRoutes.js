const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('questions', {
        name: 'Diarmuid'
    });
});

router.get('/login', async (req, res) => {
    res.render('login');
});

module.exports = router;