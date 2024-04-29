const ProfileServices = require('../services/payment.services');
const { sendErrorResponse } = require('../utils/errorHandler');


// Function to fetch tutors pending payment from the database
exports.readPendingPayments = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutor = await ProfileServices.readPendingPayments(tutorID, fullName, email, phone, program, year, about);

        if (!tutor) {
            return sendErrorResponse(res, 500, 'Error editing tutor details');
        }

        res.json({ status: true, success: tutor });
    } catch (error) {
        next(error);
    }
};
