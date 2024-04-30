const reviewModel = require('../models/review.model');

class ReviewServices {
    static async fetchReviews(tutorID) {
        try {
            const reviews = await reviewModel.find({ tutorID: tutorID }).exec();
            return reviews.length > 0 ? reviews : null; // Return null if no reviews are found
        } catch (error) {
            console.error('Error fetching reviews:', error);
            return null;
        }
    }
}

module.exports = ReviewServices;
