const router = require('express').Router();

const authenticationController = require('../controllers/authentication.controller');


router.post('/storeTutorData', authenticationController.storeTutorData);
router.post('/sendAccountCreationSuccessEmail', authenticationController.sendEmail);

module.exports = router;


//* Define the various routes to the server in this file
