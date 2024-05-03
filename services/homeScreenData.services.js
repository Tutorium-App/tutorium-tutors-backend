const tutorModel = require('../models/tutor.model');
const newTutorialVideo = require('../models/newTutorialVideo.model');
const newTutorialService = require('../models/newTutorialService.model');

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
 
    static async uploadTutorialVideo(tutorID, title, category, description, dateCreated, school, cost, thumbnailLink, videoLink) {
        try {
            var rating = 1;
            var sales = 0;

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

    static async uploadTutorialService(tutorID, title, category, description, dateCreated, school, cost, thumbnailLink) {
        try {
            var rating = 1;
            var sales = 0;

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
