const tutorialServiceModel = require('../models/tutorialService.model');
const newTutorialServiceModel = require('../models/newTutorialService.model');


class TutorialServiceServices {
    //function to create tutorial service 
    static async createTutorialServices(tutorID, title, category, description, cost, dateCreated, thumbnailLink, sales, school, videoLink) {
        var rating = 1;
        var sales = 0;

        const tutorialService = new newTutorialServiceModel({ tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink });
        return await tutorialService.save();
    }

    //function to move tutorial service into main database
    static async moveTutorialService(tutorID, title, category, description, cost, dateCreated, thumbnailLink, sales, school, videoLink) {

        const tutorialService = new tutorialServiceModel({ tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink });
        return await tutorialService.save();
    }

    //function to fetch tutorial Service
    static async fetchTutorialService(tutorialServiceID) {

        const tutorialService = await tutorialServiceModel.find({ tutorialServiceID });

        return tutorialService;
    }    

    //function to fetch tutorial services
    static async fetchTutorialServices(tutorID) {

        const tutorialServices = await tutorialServiceModel.find({ tutorID });

        return tutorialServices;
    }

    //function to update tutorial service using its ID
    static async updateTutorialService(tutorServiceID, title, category, description) {
        const tutorialService = await tutorialServiceModel.findById(tutorServiceID);

        if (!tutorialService) {
            throw new Error("Tutorial service not found");
        }

        tutorialService.title = title;
        tutorialService.category = category;
        tutorialService.description = description;

        // Save the updated tutorial service
        await tutorialService.save();

        return tutorialService;
    }

    // Function to delete a tutorial service using its ID
    static async deleteTutorialService(tutorServiceID) {
        try {
            // Find the tutorial service by ID
            const tutorialService = await tutorialServiceModel.findById(tutorServiceID);

            if (!tutorialService) {
                throw new Error("Tutorial service not found");
            }

            // Delete the tutorial service
            await tutorialService.remove();

            return tutorialService;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TutorialServiceServices;