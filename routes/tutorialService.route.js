const router = require('express').Router();

const tutorialServiceController = require('../controllers/tutorialService.controller');

router.post('/createTutorialService', tutorialServiceController.createTutorialService);
router.get('/fetchTutorialServices', tutorialServiceController.fetchTutorialServices); 
router.put('/updateTutorialService', tutorialServiceController.updateTutorialService);
router.delete('/deleteTutorialService', tutorialServiceController.deleteTutorialService);
router.post('/moveTutorialService', tutorialServiceController.moveTutorialService);


module.exports = router;


//* Define the various routes to the server in this file
