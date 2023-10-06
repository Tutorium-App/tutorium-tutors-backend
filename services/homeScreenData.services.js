const tutorModel = require('../models/tutor.model');

class HomeScreenServices {
    static async fetchTutorDataById(tutorID) {
        try {
            // Find the tutor by tutorID in the database
            const tutor = await tutorModel.findOne({ tutorID });

            return tutor;
        } catch (error) {
            throw error; 
        }
    }
}

module.exports = HomeScreenServices;
