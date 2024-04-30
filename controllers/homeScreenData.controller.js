const HomeScreenServices = require('../services/homeScreenData.services');
const { sendErrorResponse } = require('../utils/errorHandler');

// function to get tutor data using the tutorID
exports.fetchTutorData = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutorData = await HomeScreenServices.fetchHomeScreenData(tutorID);

        if (!tutorData) {
            return sendErrorResponse(res, 500, 'Error fetching tutor details');
        }

        res.json({ status: true, success: tutorData });
    } catch (error) {
        next(error);
    }
}; 

// function to upload a tutorial service
exports.uploadTutorialVideo = async (req, res, next) => {
    try {
        const { tutorID, title, category, description, dateCreated, school, cost, thumbnailLInk, rating, sales } = req.params;

        const tutorData = await HomeScreenServices.uploadTutorialVideo(tutorID, title, category, description, dateCreated, school, cost, thumbnailLInk, rating, sales);

        if (!tutorData) {
            return sendErrorResponse(res, 500, 'Failed to upload tutorial video');
        }

        res.json({ status: true, success: tutorData });
    } catch (error) {
        next(error);
    }
};

// function to create a tutorial video
exports.uploadTutorialVideo = async (req, res, next) => {
    try {
        const { tutorID, title, category, description, dateCreated, school, cost, thumbnailLInk, videoLink, rating, sales } = req.params;

        const tutorData = await HomeScreenServices.uploadTutorialVideo(tutorID, title, category, description, dateCreated, school, cost, thumbnailLInk, videoLink, rating, sales);

        if (!tutorData) {
            return sendErrorResponse(res, 500, 'Failed to upload tutorial service');
        }

        res.json({ status: true, success: tutorData });
    } catch (error) {
        next(error);
    }
};
