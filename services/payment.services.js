const pendingTutorialsModel = require('../models/pendingTutorials.model');


class PaymentServices {
    static async fetchPayments(tutorID) {
        try {
            // Fetch pending tutorials where tutor ID is valid
            const pendingTutorials = await pendingTutorialsModel.find({
                tutorID: tutorID,
            }).exec();
            return pendingTutorials;
        } catch (error) {
            console.error('Error fetching pending tutorials:', error);
            return null;
        }
    }
}

module.exports = PaymentServices;
