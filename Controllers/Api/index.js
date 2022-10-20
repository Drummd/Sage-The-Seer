const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const prophecyRoutes = require('./prophecyRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/prophecy', prophecyRoutes);

module.exports = router;