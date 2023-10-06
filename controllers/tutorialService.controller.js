const TutorialServiceServices = require('../services/tutorialService.services');

//function to create a tutorial service
exports.createTutorialService = async (req, res, next)=>{
    try {
        const {tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school} = req.body;
        
        let tutorialService = await TutorialServiceServices.createTutorialService(tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school);

        if (!tutorialService) {
            return res.status(404).json({ status: false, message: 'Could not create tutorial service' });
        }

        res.json({status: true, success: tutorialService});
    } catch (error) {
        next(error);
    }
}

// Function to fetch tutorial Service using tutorialServiceID(ObjectID)
exports.fetchTutorialService = async (req, res, next) => {
    try {
        const { tutorialServiceID } = req.params;

        const tutorialService = await TutorialServiceServices.fetchTutorialService(tutorialServiceID);

        if (!tutorialService) {
            return res.status(404).json({ status: false, message: 'Tutorial Service not found' });
        }

        res.json({ status: true, success: tutorialService });
    } catch (error) {
        next(error);
    }
};

// Function to fetch tutorial services using tutorID
exports.fetchTutorialServices = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutorialServices = await TutorialServiceServices.fetchTutorialServices(tutorID);

        if (!tutorialServices) {
            return res.status(404).json({ status: false, message: 'Tutorial services not found' });
        }

        res.json({ status: true, success: tutorialServices });
    } catch (error) {
        next(error);
    }
};

// Function to update tutorial service using tutorServiceID(ObjectID)
exports.updateTutorialService = async (req, res, next) => {
    try {
        const {tutorServiceID, title, category, description} = req.body;

        const tutorialService = await TutorialServiceServices.updateTutorialService(tutorServiceID, title, category, description);

        if (!tutorialService) {
            return res.status(404).json({ status: false, message: 'Failed to update tutorial video' });
        }

        res.json({ status: true, success: tutorialService });
    } catch (error) {
        next(error);
    }
};

// Function to delete tutorial service using tutorServiceID(ObjectID)
exports.deleteTutorialService = async (req, res, next) => {
    try {
        const { tutorServiceID } = req.params;

        const tutorialService = await TutorialServiceServices.deleteTutorialService(tutorServiceID);

        if (!tutorialService) {
            return res.status(404).json({ status: false, message: 'Failed to delete tutorial service' });
        }

        res.json({ status: true, success: tutorialService });
    } catch (error) {
        next(error);
    }
};

//function to move a tutorial service to the main database
exports.moveTutorialService = async (req, res, next)=>{
    try {
        const {tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school} = req.body;
        
        let tutorialService = await TutorialServiceServices.moveTutorialService(tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school);

        if (!tutorialService) {
            return res.status(404).json({ status: false, message: 'Could not move tutorial service' });
        }

        res.json({status: true, success: tutorialService});
    } catch (error) {
        next(error);
    }
}