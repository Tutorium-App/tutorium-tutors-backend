const AuthenticationServices = require('../services/authentication.services');
const EmailServices = require('../services/email.services')
const { sendErrorResponse } = require('../utils/errorHandler');

//function to get tutor authentication data and store it
exports.storeTutorData = async (req, res, next)=>{
    try {
        const {tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink} = req.body;
        
        let tutorData = await AuthenticationServices.storeTutorData(tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink);

        if (!tutorData) {
            return sendErrorResponse(res, 500, 'Error saving tutor details');
        }

        res.json({status: true, success: tutorData});

        let tutorEmail = await EmailServices.sendTutorRegistrationSuccessEmail(email, fullName);

        if (!tutorEmail) {
            return sendErrorResponse(res, 500, 'Error sending email');
        }
        //todo: in Flutter, if status is true, send email verification which would be followed by congratulations email
    } catch (error) {
        next(error);
    } 
}

//function to delete account using tutor id
exports.deleteAccount = async (req, res, next)=>{
    try {
        const {tutorID} = req.body;
        
        let tutorData = await AuthenticationServices.deleteAccount(tutorID);

        if (!tutorData) {
            return sendErrorResponse(res, 500, 'Error deleting tutor account');
        }

        res.json({status: true, success: tutorData});
    } catch (error) {
        next(error);
    }
}

