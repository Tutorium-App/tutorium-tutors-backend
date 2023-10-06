const AuthenticationServices = require('../services/authentication.services');
const EmailServices = require('../services/email.services')

//function to get tutor authentication data and store it
exports.storeTutorData = async (req, res, next)=>{
    try {
        const {tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink} = req.body;
        
        let tutorData = await AuthenticationServices.storeTutorData(tutorID, fullName, email, phone, dateCreated, school, program, year, profilePhotoLink);

        if (!tutorData) {
            return res.status(404).json({ status: false, message: 'Unable to create tutor account' });
        }

        res.json({status: true, success: tutorData});
        //todo: in Flutter, if status is true, send email verification which would be followed by congratulations email
    } catch (error) {
        next(error);
    }
}

//function to send tutor a congratulations email after account creation
exports.sendEmail = async (req, res, next)=>{
    try {
        const {email} = req.body;
        
        let tutorEmail = await EmailServices.sendTutorRegistrationSuccessEmail(email);

        if (!tutorEmail) {
            return res.status(404).json({ status: false, message: 'Could not send registration success email' });
        }

        res.json({status: true, success: tutorEmail});
    } catch (error) {
        next(error);
    }
};