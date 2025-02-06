const tutorModel = require('../models/tutor.model');
const newTutorialVideo = require('../models/tutorialVideo.model');
const newTutorialService = require('../models/tutorialService.model');
const saveMessage = require('../utils/saveMessage');
const SMSServices = require('../services/sms.services');

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
                tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink, videoLink, rating: 0, sales: 0, tutorialType: "video"
            });
            const savedVideo = await newVideo.save();
    
            // message to admin
            let message = 
            `Dear Tutorium Admin,

            A tutor just created a new tutorial video. Review it for approval. Below are the details:

            Tutorial Title: ${title}
            Category: ${category}
            Cost: ${cost}
            Description: ${description}
            Video Link: ${videoLink}
            School: ${school}
            Date Created: ${dateCreated}
            Name: ${tutorName}
            Email: ${tutorEmail}
            Number: ${tutorNumber}

            Best regards,
            The Tutorium Team

            [Customer service email: tutorium.customer@gmail.com. Email us here.]`;

            const SMS = await saveMessage(message);
            // Send SMS to admin
            const smsMessage = `Hi admin, review this tutorial video: ${SMS}`;
            let requestRefundSMS = await SMSServices.sendSMS("0256772900", smsMessage);

            // Handle sms send failure
            if (!requestRefundSMS) {
                console.log('Error sending SMS');
            }

            const { verified, ...video } = savedVideo.toObject();
            return video;
        } catch (error) {
            console.error('Error uploading tutorial video:', error);
            return null;
        }
    }

    static async uploadTutorialService(tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink) {
        try {
            
            const newService = new newTutorialService({
                tutorID, tutorName, tutorEmail, tutorNumber, title, category, description, dateCreated, school, cost, thumbnailLink, rating: 0, sales: 0, tutorialType: "service"
            });
            const savedService = await newService.save();

            // message to admin
            let adminMessage = 
            `Dear Tutorium Admin,

            A tutor just created a new tutorial service. Review it for approval. Below are the details:

            Tutorial Title: ${title}
            Category: ${category}
            Cost: ${cost}
            Description: ${description}
            School: ${school}
            Date Created: ${dateCreated}
            Name: ${tutorName}
            Email: ${tutorEmail}
            Number: ${tutorNumber}

            Best regards,
            The Tutorium Team 
            
            [Customer service email: tutorium.customer@gmail.com. Email us here.]`;

            const SMS = await saveMessage(adminMessage);
            // Send SMS to admin
            const smsMessage = `Hi admin, review this tutorial service: ${SMS}`;
            let requestRefundSMS = await SMSServices.sendSMS("0256772900", smsMessage);

            // Handle sms send failure
            if (!requestRefundSMS) {
                console.log('Error sending SMS');
            }

            const { verified, ...service } = savedService.toObject();
            return service; 
        } catch (error) {
            console.error('Error uploading tutorial service:', error);
            return null;
        }
    }
}

module.exports = HomeScreenServices;
