const ProfileServices = require('../services/profile.services');
const { sendErrorResponse } = require('../utils/errorHandler');


// Function to fetch tutors pending payment from the database
exports.editProfileDetails = async (req, res, next) => {
    try {
        const { tutorID, fullName, email, phone, program, year, about } = req.body;

        const tutor = await ProfileServices.editProfileDetails(tutorID, fullName, email, phone, program, year, about);

        if (!tutor) {
            console.error('Error editing tutor details: Tutor not found or update unsuccessful');
            return res.status(500).json({ status: false, error: 'Error editing tutor details' });
        }

        res.json({ status: true, success: tutor });
    } catch (error) {
        console.error('Error editing tutor details:', error);
        res.status(500).json({ status: false, error: 'Error editing tutor details' });
    }
};
