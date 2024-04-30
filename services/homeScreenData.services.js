const tutorModel = require('../models/tutor.model');
const newTutorialVideo = require('../models/newTutorialVideo');
const newTutorialService = require('../models/newTutorialService');

class HomeScreenServices {
    static async fetchHomeScreenData(tutorID) {
        try {
            const tutorData = await tutorModel.findById(tutorID).exec();
            return tutorData;
        } catch (error) {
            console.error('Error fetching home screen data:', error);
            return null;
        }
    }

    static async uploadTutorialVideo(tutorID, title, category, description, dateCreated, school, cost, thumbnailLink, videoLink, rating, sales) {
        try {
            const newVideo = new newTutorialVideo({
                tutorID, title, category, description, dateCreated, school, cost, thumbnailLink, videoLink, rating, sales
            });
            await newVideo.save();
            return newVideo;
        } catch (error) {
            console.error('Error uploading tutorial video:', error);
            return null;
        }
    }

    static async uploadTutorialService(tutorID, title, category, description, dateCreated, school, cost, thumbnailLink, rating, sales) {
        try {
            const newService = new newTutorialService({
                tutorID, title, category, description, dateCreated, school, cost, thumbnailLink, rating, sales
            });
            await newService.save();
            return newService;
        } catch (error) {
            console.error('Error uploading tutorial service:', error);
            return null;
        }
    }
}

module.exports = HomeScreenServices;
