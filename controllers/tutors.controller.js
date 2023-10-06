const TutorServices = require('../services/tutors.services');


// Function to fetch tutor
exports.fetchTutor = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutor = await TutorServices.fetchTutor(tutorID);

        if (!tutor) {
            return res.status(404).json({ status: false, message: 'Tutor not found' });
        }

        res.json({ status: true, success: tutor });
    } catch (error) {
        next(error);
    }
};

// Function to fetch tutors
exports.fetchTutors = async (req, res, next) => {
    try {

        const tutors = await TutorServices.fetchTutors();

        if (!tutors) {
            return res.status(404).json({ status: false, message: 'Tutors not found' });
        }

        res.json({ status: true, success: tutors });
    } catch (error) {
        next(error);
    }
};

// Function to update tutor datausing tutorID
exports.updateTutorData = async (req, res, next) => {
    try {
        const {tutorID, fullName, email, phone, course, year, about} = req.body;

        const tutor = await TutorServices.updateTutorData(tutorID, fullName, email, phone, course, year, about);

        if (!tutor) {
            return res.status(404).json({ status: false, message: 'Failed to update tutor data' });
        }

        res.json({ status: true, success: tutor });
    } catch (error) {
        next(error);
    }
};

// Function to delete tutor using tutorVideoID
exports.deleteTutor = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const tutor = await TutorServices.deleteTutor(tutorID);

        if (!tutor) {
            return res.status(404).json({ status: false, message: 'Failed to delete tutor' });
        }

        res.json({ status: true, success: tutor });
    } catch (error) {
        next(error);
    }
};