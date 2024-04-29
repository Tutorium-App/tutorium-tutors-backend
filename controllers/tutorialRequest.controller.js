const ReviewServices = require('../services/review.services');
const { sendErrorResponse } = require('../utils/errorHandler');

// Function to fetch all tutorial requests by school
exports.readTutorialRequests = async (req, res, next) => {
    try {
        const { school } = req.params;

        const tutorialRequests = await ReviewServices.readTutorialRequests(school);

        if (!tutorialRequests) {
            return sendErrorResponse(res, 500, 'Error fetching tutorial requests');
        }

        res.json({ status: true, success: tutorialRequests });
    } catch (error) {
        next(error);
    }
};

// Function to fetch all tutorial requests by school
exports.readTutorialRequests = async (req, res, next) => {
    try {
        const { school } = req.params;

        const tutorialRequests = await ReviewServices.readTutorialRequests(school);

        if (!tutorialRequests) {
            return sendErrorResponse(res, 500, 'Error fetching tutorial requests');
        }

        res.json({ status: true, success: tutorialRequests });
    } catch (error) {
        next(error);
    }
};

