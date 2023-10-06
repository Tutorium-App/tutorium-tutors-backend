const HomeScreenServices = require('../services/homeScreenData.services');

// Function to get tutor data from the database by tutorID
exports.fetchTutorData = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutorData = await HomeScreenServices.fetchTutorDataById(tutorID);

        if (!tutorData) {
            return res.status(404).json({ status: false, message: 'Tutor not found' });
        }

        res.json({ status: true, success: tutorData });
    } catch (error) {
        next(error);
    }
};
