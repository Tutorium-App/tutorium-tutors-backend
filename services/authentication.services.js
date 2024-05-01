const tutorModel = require('../models/tutor.model');
const paymentModel = require('../models/payment.model'); 
const pendingTutorialModel = require('../models/pendingTutorials.model');
const reviewModel = require('../models/reviews.model');
const tutorialRequestModel = require('../models/tutorialRequest.model');
const tutorialServiceModel = require('../models/tutorialService.model');
const tutorialVideoModel = require('../models/tutorialVideo.model');

const mongoose = require('mongoose');


class AuthenticationServices{
    //function to store tutor data into database
    static async storeTutorData(tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink){
        var verified = "false";
        rating = 1;
        balance = 0;
        about = "";

        const tutorData = new tutorModel({tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink, verified, rating, balance, about});
        return await tutorData.save();
    }


    //function to delete user account from the database
    static async deleteAccount(tutorID) {
        try {
            // Start a session and transaction for atomic operations
            const session = await mongoose.startSession();
            session.startTransaction();

            // Delete tutor in all related collections
            await tutorModel.deleteOne({ tutorID: tutorID }, { session });
            await paymentModel.deleteMany({ tutorID: tutorID }, { session });
            await pendingTutorialModel.deleteMany({ tutorID: tutorID }, { session });
            await reviewModel.deleteMany({ tutorID: tutorID }, { session });
            await tutorialRequestModel.deleteMany({ tutorID: tutorID }, { session });
            await tutorialServiceModel.deleteMany({ tutorID: tutorID }, { session });
            await tutorialVideoModel.deleteMany({ tutorID: tutorID }, { session });

            // Commit the transaction
            await session.commitTransaction();
            session.endSession();

            return { success: true, message: 'Account deleted successfully.' };
        } catch (error) {
            // If an error occurs, abort the transaction and log the error
            await session.abortTransaction();
            session.endSession();
            console.error('Failed to delete tutor and related data:', error);
            return { success: false, message: 'Failed to delete account. Please try again later.', error: error };
        }
    }
 
}

module.exports = AuthenticationServices;

