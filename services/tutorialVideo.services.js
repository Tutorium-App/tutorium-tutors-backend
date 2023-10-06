const tutorialVideoModel = require('../models/tutorialVideo.model');
const newTutorialVideoModel = require('../models/newTutorialVideo.model');


class TutorialVideoServices {
    //function to create tutorial video 
    static async createTutorialVideo(tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink) {
        var rating = 1;
        var sales = 0;

        const tutorialVideo = new newTutorialVideoModel({ tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink });
        return await tutorialVideo.save();
    }

    //function to create tutorial video 
    static async moveTutorialVideo(tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink) {

        const tutorialVideo = new tutorialVideoModel({ tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink });
        return await tutorialVideo.save();
    }


    //function to fetch tutorial video
    static async fetchTutorialVideo(tutorialVideoID) {

        const tutorialVideo = await tutorialVideoModel.find({ tutorialVideoID });

        return tutorialVideo;
    }

    //function to fetch tutorial videos
    static async fetchTutorialVideos(tutorID) {

        const tutorialVideos = await tutorialVideoModel.find({ tutorID });

        return tutorialVideos;
    }

    //function to update tutorial video using its ID
    static async updateTutorialVideos(tutorVideoID, title, category, description) {
        const tutorialVideo = await tutorialVideoModel.findById(tutorVideoID);

        if (!tutorialVideo) {
            throw new Error("Tutorial video not found");
        }

        tutorialVideo.title = title;
        tutorialVideo.category = category;
        tutorialVideo.description = description;

        // Save the updated tutorial video
        await tutorialVideo.save();

        return tutorialVideo;
    }

    // Function to delete a tutorial video using its ID
    static async deleteTutorialVideo(tutorVideoID) {
        try {
            // Find the tutorial video by ID
            const tutorialVideo = await tutorialVideoModel.findById(tutorVideoID);

            if (!tutorialVideo) {
                throw new Error("Tutorial video not found");
            }

            // Delete the tutorial video
            await tutorialVideo.remove();

            return tutorialVideo;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TutorialVideoServices;