const TutorialVideoServices = require('../services/tutorialVideo.services');

//function to create a tutorial video
exports.createTutorialVideo = async (req, res, next)=>{
    try {
        const {tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink} = req.body;
        
        let tutorialVideo = await TutorialVideoServices.createTutorialVideo(tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink);

        if (!tutorialVideo) {
            return res.status(404).json({ status: false, message: 'Could not create tutorial video' });
        }

        res.json({status: true, success: tutorialVideo});
        //todo: in Flutter, if status is true, send email verification which would be followed by congratulations email
    } catch (error) {
        next(error);
    }
}

// Function to fetch tutorial video using tutorialVideoID(ObjectID)
exports.fetchTutorialVideo = async (req, res, next) => {
    try {
        const { tutorialVideoID } = req.params;

        const tutorialVideo = await TutorialVideoServices.fetchTutorialVideo(tutorialVideoID);

        if (!tutorialVideo) {
            return res.status(404).json({ status: false, message: 'Tutorial video not found' });
        }

        res.json({ status: true, success: tutorialVideo });
    } catch (error) {
        next(error);
    }
};

// Function to fetch tutorial videos using tutorID
exports.fetchTutorialVideos = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutorialVideos = await TutorialVideoServices.fetchTutorialVideos(tutorID);

        if (!tutorialVideos) {
            return res.status(404).json({ status: false, message: 'Tutorial videos not found' });
        }

        res.json({ status: true, success: tutorialVideos });
    } catch (error) {
        next(error);
    }
};

// Function to update tutorial video using tutorVideoID(ObjectID)
exports.updateTutorialVideo = async (req, res, next) => {
    try {
        const {tutorVideoID, title, category, description} = req.body;

        const tutorialVideo = await TutorialVideoServices.updateTutorialVideo(tutorVideoID, title, category, description);

        if (!tutorialVideo) {
            return res.status(404).json({ status: false, message: 'Failed to update tutorial video' });
        }

        res.json({ status: true, success: tutorialVideo });
    } catch (error) {
        next(error);
    }
};

// Function to delete tutorial video using tutorVideoID(ObjectID)
exports.deleteTutorialVideo = async (req, res, next) => {
    try {
        const { tutorVideoID } = req.params;

        const tutorialVideo = await TutorialVideoServices.deleteTutorialVideo(tutorVideoID);

        if (!tutorialVideo) {
            return res.status(404).json({ status: false, message: 'Failed to delete tutorial video' });
        }

        res.json({ status: true, success: tutorialVideo });
    } catch (error) {
        next(error);
    }
};

//function to move a tutorial Video to the main database
exports.moveTutorialVideo = async (req, res, next)=>{
    try {
        const {tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink} = req.body;
        
        let tutorialVideo = await TutorialVideoServices.moveTutorialVideo(tutorID, title, category, description, cost, dateCreated, thumbnailLink, rating, sales, school, videoLink);

        if (!tutorialVideo) {
            return res.status(404).json({ status: false, message: 'Could not move tutorial video' });
        }

        res.json({status: true, success: tutorialVideo});
    } catch (error) {
        next(error);
    }
}