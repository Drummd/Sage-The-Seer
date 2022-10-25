const router = require('express').Router();
const userRoutes = require('./userRoutes');

const prophecyRoutes = require('./prophecyRoutes');

router.use('/users', userRoutes);

router.use('./prophecy', prophecyRoutes);

module.exports = router;