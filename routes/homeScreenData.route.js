const router = require('express').Router();

const homeScreenDataController = require('../controllers/homeScreenData.controller');

router.get('/homeScreen', homeScreenDataController.fetchHomeScreenData);

module.exports = router;


//* Define the various routes to the server in this file
