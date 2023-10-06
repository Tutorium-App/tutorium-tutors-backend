const ReviewServices = require('../services/review.services');


//function to create a review
exports.createReview = async (req, res, next)=>{
    try {
        const {tutorID, tutorialID, studentName, studentYear, tutorialTitle, rating, profilePhotoLink, comment} = req.body;
        
        let review = await ReviewServices.createReview(tutorID, tutorialID, studentName, studentYear, tutorialTitle, rating, profilePhotoLink, comment);

        if (!review) {
            return res.status(404).json({ status: false, message: 'Could not create review' });
        }

        res.json({status: true, success: review});
    } catch (error) {
        next(error);
    }
}

// Function to fetch reviews using tutorID/tutorialID
exports.fetchReviews = async (req, res, next) => {
    try {
        const { ID } = req.params;

        const reviews = await Reviewservices.fetchReviews(ID);

        if (!reviews) {
            return res.status(404).json({ status: false, message: 'Reviews not found' });
        }

        res.json({ status: true, success: reviews });
    } catch (error) {
        next(error);
    }
};

// Function to delete review using reviewID(ObjectID)
exports.deleteReview = async (req, res, next) => {
    try {
        const { reviewID } = req.params;

        const review = await TutorialServiceServices.deleteReview(reviewID);

        if (!review) {
            return res.status(404).json({ status: false, message: 'Failed to delete review' });
        }

        res.json({ status: true, success: review });
    } catch (error) {
        next(error);
    }
};