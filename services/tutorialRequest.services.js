const tutorialRequestModel = require('../models/tutorialRequest.model');
const acceptedTutorialRequestModel = require('../models/acceptedRequests.model');
const EmailServices = require('../services/email.services');

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

    static async acceptTutorialRequest(studentRequestID, studentID, tutorID, studentName, studentEmail, tutorNumber, tutorEmail, tutor, role, requestType, description, budget, amount, validUntil, school) {
        try {
            // Create a new accepted request
            const newAcceptedRequest = new acceptedTutorialRequestModel({
                studentRequestID,
                studentID,
                tutorID,
                studentName,
                studentEmail,
                tutorNumber,
                tutorEmail,
                tutor,
                role,
                requestType,
                description,
                budget,
                amount,
                validUntil,
                school
            });

            // Save the accepted request to the database
            await newAcceptedRequest.save();

            // Send student email if tutorial request is accepted
            if (newAcceptedRequest) {
                const message = `Dear ${studentName},\n
                Good news! ${tutor} has just accepted your request and is eager to help you with the role: "${role}".
                You can review this tutor's profile and book their services on our app. 
                If you have any questions or need further assistance in making your choice, please don't hesitate to reach out. We are here to support you every step of the way.
                Thank you for using Tutorium. We are thrilled to be a part of your educational journey!\n
                Warm regards,
                The Tutorium Team \n
                [Customer service email: tutorium.customer@gmail.com. Email us here.]`;
                const subject = "Your Tutorial Request has been Accepted!";

                // Assuming sendEmail is a function within your EmailServices class
                let emailStatus = await EmailServices.sendEmail(studentEmail, subject, message);

                if (!emailStatus) {
                    console.error('Error sending confirmation email');
                    return null; // Adjust handling based on your error strategy
                }
            }

            return newAcceptedRequest;
        } catch (error) {
            console.error('Error accepting tutorial request:', error);
            return null;
        }
    }
}

module.exports = TutorialRequestServices;
