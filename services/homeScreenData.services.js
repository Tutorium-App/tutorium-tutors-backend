const tutorModel = require('../models/tutor.model');
const newTutorialVideo = require('../models/newTutorialVideo.model');
const newTutorialService = require('../models/newTutorialService.model');
const EmailServices = require('../services/email.services');

class HomeScreenServices {
    static async fetchHomeScreenData(tutorID) {
        try {
            const tutorData = await tutorModel.find({ tutorID: tutorID }).exec();
            return tutorData;
        } catch (error) {
            console.error('Error fetching home screen data:', error);
            return null;
        }
    }
 
    static async uploadTutorialVideo(tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink, videoLink) {
        try {
            const newVideo = new newTutorialVideo({
                tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink, videoLink, rating: 0, sales: 0
            });
            await newVideo.save();
    
            // Increment numberOfVideos for the tutor
            // const tutor = await tutorModel.findOneAndUpdate(
            //     { tutorID: tutorID }, // Update the filter to use tutorID
            //     { $inc: { numberOfVideos: 1 } },
            //     { new: true }
            // );
    
            // if (!tutor) {
            //     console.error('Tutor not found for updating video count');
            //     return null;
            // } //todo: this commented code goes to the admin dashboard. It's for when a tutorial service is approved for a tutor
    
            // message to admin
            const adminMessage = `
            Dear Tutorium Admin,
            A tutor just created a new tutorial video. Review it for approval. Below are the details:\n
            Tutorial Title: ${title}
            Category: ${category}
            Cost: ${cost}
            Description: ${description}
            Video Link: ${videoLink}
            School: ${school}
            Date Created: ${dateCreated}
            Name: ${tutorName}
            Email: ${tutorEmail}
            Number: ${tutorNumber}\n
            Best regards,
            The Tutorium Team \n
            [Customer service email: tutorium.customer@gmail.com. Email us here.]`;

            const adminSubject = `New Tutorial Video Created`;
            const adminEmail = "buabassahlawson01@gmail.com"; //todo: admin email goes here
            const adminName = "Tutorium Admin"

            // Attempt to send the email
            let sendEMail = await EmailServices.sendEmail(adminEmail, adminName, adminSubject, adminMessage);

            // Handle email send failure
            if (!sendEMail) {
                return sendErrorResponse(res, 500, 'Error sending email');
            }

            return newVideo;
        } catch (error) {
            console.error('Error uploading tutorial video:', error);
            return null;
        }
    }

    static async uploadTutorialService(tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink) {
        try {
            const newService = new newTutorialService({
                tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink, rating: 0, sales: 0
            });
            await newService.save();
    
            // Increment numberOfServices for the tutor
            // const tutor = await tutorModel.findOneAndUpdate(
            //     { tutorID: tutorID }, // Update the filter to use tutorID
            //     { $inc: { numberOfServices: 1 } },
            //     { new: true }
            // );
    
            // if (!tutor) {
            //     console.error('Tutor not found for updating service count');
            //     return null;
            // } //todo: this commented code goes to the admin dashboard. It's for when a tutorial service is approved for a tutor
    
            // message to admin
            const adminMessage = `
            Dear Tutorium Admin,
            A tutor just created a new tutorial service. Review it for approval. Below are the details:\n
            Tutorial Title: ${title}
            Category: ${category}
            Cost: ${cost}
            Description: ${description}
            School: ${school}
            Date Created: ${dateCreated}
            Name: ${tutorName}
            Email: ${tutorEmail}
            Number: ${tutorNumber}\n
            Best regards,
            The Tutorium Team \n
            [Customer service email: tutorium.customer@gmail.com. Email us here.]`;

            const adminSubject = `New Tutorial Service Created`;
            const adminEmail = "buabassahlawson01@gmail.com"; //todo: admin email goes here
            const adminName = "Tutorium Admin"

            // Attempt to send the email
            let sendEMail = await EmailServices.sendEmail(adminEmail, adminName, adminSubject, adminMessage);

            // Handle email send failure
            if (!sendEMail) {
                return sendErrorResponse(res, 500, 'Error sending email');
            }

            return newService;
        } catch (error) {
            console.error('Error uploading tutorial service:', error);
            return null;
        }
    }
}

module.exports = HomeScreenServices;
