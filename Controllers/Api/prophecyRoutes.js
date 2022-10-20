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

router.get('/:emotions', async (req, res) => {
    try {
        const dbRes = await Prophecy.findAll({                                              
            where: {
                emotions: req.params.emotions
            }
        });
    }
 catch (err) {
    res.status (400).json(err);
 }
});
    
    
        const prophecies = dbRes.map(prophecy => prophecy.get({ plain: true }));

        const randomProphecy = prophecies[Math.floor(Math.random() * prophecies.length)];


res.render('prophecy', randomProphecy );


res.render( 'questions', randomProphecy);
 

res.render( 'main', randomProphecy);




module.exports = router;