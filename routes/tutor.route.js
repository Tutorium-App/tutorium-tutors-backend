const router = require('express').Router();

const tutorController = require('../controllers/tutor.controller');

router.get('/fetchTutor', tutorController.fetchTutor); 
router.get('/fetchTutors', tutorController.fetchTutors);
router.put('/updateTutor', tutorController.updateTutor); 
router.delete('/deleteReview', tutorController.deleteReview);

module.exports = router;


//* Define the various routes to the server in this file
