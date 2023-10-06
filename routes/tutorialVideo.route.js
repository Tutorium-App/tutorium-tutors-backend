const router = require('express').Router();

const tutorialVideoController = require('../controllers/tutorialVideo.controller');

router.post('/createTutorialVideo', tutorialVideoController.createTutorialVideo);
router.get('/fetchTutorialVideos', tutorialVideoController.fetchTutorialVideos);
router.put('/updateTutorialVideo', tutorialVideoController.updateTutorialVideo);
router.delete('/deleteTutorialVideo', tutorialVideoController.deleteTutorialVideo);
router.post('/moveTutorialVideo', tutorialVideoController.moveTutorialVideo);


module.exports = router;


//* Define the various routes to the server in this file
