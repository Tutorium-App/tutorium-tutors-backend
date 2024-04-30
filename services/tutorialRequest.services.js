const tutorialRequestModel = require('../models/tutorialRequest.model');
const acceptedTutorialRequestModel = require('../models/AcceptedTutorialRequest');


class TutorialRequestServices {
    // Fetch all tutorial requests by school
    static async readTutorialRequests(school) {
        try {
            const tutorialRequests = await tutorialRequestModel.find({ school: school }).exec();
            return tutorialRequests.length > 0 ? tutorialRequests : null;
        } catch (error) {
            console.error('Error fetching tutorial requests:', error);
            return null;
        }
    }

    // Accept a tutorial request by studentID and requestID
    static async acceptTutorialRequest(studentRequestID, studentID, tutorID, studentName, tutor, role, requestType, description, budget, amount) {
        try {
            // Create a new accepted request
            const newAcceptedRequest = new acceptedTutorialRequestModel({
                studentRequestID,
                studentID,
                tutorID,
                studentName,
                tutor,
                role,
                requestType,
                description,
                budget,
                amount
            });

            // Save the accepted request to the database
            await newAcceptedRequest.save();
            
            return newAcceptedRequest;
        } catch (error) {
            console.error('Error accepting tutorial request:', error);
            return null;
        }
    }
}

module.exports = TutorialRequestServices;
