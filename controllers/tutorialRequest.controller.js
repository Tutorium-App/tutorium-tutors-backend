const TutorialRequestServices = require('../services/tutorialRequest.services');
const { sendErrorResponse } = require('../utils/errorHandler');

// Function to fetch all tutorial requests by school
exports.readTutorialRequests = async (req, res, next) => {
    try {
        const { school } = req.params;

        const tutorialRequests = await TutorialRequestServices.readTutorialRequests(school);

        if (!tutorialRequests) {
            return sendErrorResponse(res, 500, 'Error fetching tutorial requests');
        }

        res.json({ status: true, success: tutorialRequests });
    } catch (error) {
        next(error);
    }
};

// Function to accept a tutorial requests
exports.acceptTutorialRequest = async (req, res, next) => {
    try {
        const { studentID, requestID, amount,  } = req.params;

        const tutorialRequests = await TutorialRequestServices.acceptTutorialRequest(school);

        if (!tutorialRequests) {
            return sendErrorResponse(res, 500, 'Error accepting tutorial requests');
        }

        res.json({ status: true, success: tutorialRequests });
    } catch (error) {
        next(error);
    }
};

