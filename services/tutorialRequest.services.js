const tutorialRequestModel = require('../models/tutorialRequest.model');
const acceptedTutorialRequestModel = require('../models/acceptedRequests.model');
const SMSServices = require('../services/sms.services');
const saveMessage = require('../utils/saveMessage');
const studentModel = require('../models/tutor.model');

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
                let message = `Dear ${studentName},

                Good news! ${tutor} has just accepted your request and is eager to help you with the role: "${role}".
                You can review this tutor's profile and book their services on our app. 
                If you have any questions or need further assistance in making your choice, please don't hesitate to reach out. We are here to support you every step of the way.
                Thank you for using Tutorium. We are thrilled to be a part of your educational journey!

                Warm regards,
                The Tutorium Team 
                
                [Customer service email: tutorium.customer@gmail.com. Email us here.]`;

                console.log(studentID);
                const student = await studentModel.findOne({ studentID: studentID });
                console.log(student);

                const SMS = await saveMessage(message);
                // Send SMS to admin
                let smsMessage = `Hi student, a tutor accepted your service request. View details here: ${SMS}`;
                let requestRefundSMS = await SMSServices.sendSMS(student.phone, smsMessage);

                // Handle sms send failure
                if (!requestRefundSMS) {
                    console.log('Error sending SMS');
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
