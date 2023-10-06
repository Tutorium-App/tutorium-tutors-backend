const reviewModel = require('../models/review.model');

class ReviewServices {
    //function to create review 
    static async createReview(tutorID, tutorialID, studentName, studentYear, tutorialTitle, rating, profilePhotoLink, comment) {
        var rating = 1;
        //todo: use studentID to fetch studentName, year and profilePhotoLink for the review before creating a review with it


        const review = new createReview({tutorID, tutorialID, studentName, studentYear, tutorialTitle, rating, profilePhotoLink, comment});
        return await review.save();
    }

    //function to fetch reviews
    static async fetchReviews(school) {

        const reviews = await reviewModel.find({ ID });

        return reviews;
    }

    // Function to delete a review using their reviewID
    static async deleteReview(reviewID) {
        try {
            const review = await reviewModel.findById(reviewID);

            if (!review) {
                throw new Error("Review not found");
            }

            await review.remove();

            return review;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ReviewServices;