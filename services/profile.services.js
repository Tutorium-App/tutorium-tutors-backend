const tutorModel = require('../models/tutor.model'); // Ensure this points to wherever your Tutor model is defined

class ProfileServices {
    static async editProfileDetails(tutorID, fullName, email, phone, program, year, about) {
        try {
            // Update the tutor profile based on tutorID
            const updatedTutor = await tutorModel.findOneAndUpdate(
                { tutorID: tutorID },
                { $set: { fullName, email, phone, program, year, about } },
                { new: true } // This option returns the modified document
            );

            if (!updatedTutor) {
                console.error('No tutor found with tutorID:', tutorID);
                return null; // Return null if no tutor was found or update was unsuccessful
            }

            return updatedTutor;
        } catch (error) {
            console.error('Error updating tutor profile:', error);
            throw new Error('Error updating tutor profile');
        }
    }
}

module.exports = ProfileServices;
