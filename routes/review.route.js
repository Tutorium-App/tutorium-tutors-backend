const router = require('express').Router();

const reviewController = require('../controllers/review.controller');

router.post('/createReview', reviewController.createReview);
router.get('/fetchReviews', reviewController.fetchReviews); 
router.delete('/deleteReview', reviewController.deleteReview);

module.exports = router;


//* Define the various routes to the server in this file
