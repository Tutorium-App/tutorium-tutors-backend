const tutorModel = require('../models/tutor.model');

class TutorServices {
    //function to fetch tutor
    static async fetchTutor(tutorID) {

        const tutor = await tutorModel.find({ tutorID });

        return tutor;
    }

    //function to fetch tutors
    static async fetchTutors(school) {

        const tutors = await tutorModel.find({ school });

        return tutors;
    }

    //function to update tutor using their ID
    static async updateTutor(tutorID, fullName, email, phone, course, year, about) {
        const tutor = await tutorialServiceModel.findById(tutorID);

        if (!tutor) {
            throw new Error("Tutor not found");
        }

        tutor.fullName = fullName;
        tutor.email = email;
        tutor.phone = phone;
        tutor.course = course;
        tutor.year = year;
        tutor.about = about;

        await tutor.save();

        return tutor;
    }

    // Function to delete a tutor using their ID
    static async deleteTutor(tutorID) {
        try {
            const tutor = await tutorModel.findById(tutorID);

            if (!tutor) {
                throw new Error("Tutor not found");
            }

            await tutor.remove();

            return tutor;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TutorServices;