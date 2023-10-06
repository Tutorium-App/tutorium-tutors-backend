const paymentModel = require('../models/payment.model');


class PaymentServices {
    static async fetchPayments(cost, phone) {
        try {
            // Find the payments by tutorID in the database
            const payments = await paymentModel.find({ tutorID });

            return payments;
        } catch (error) {
            throw error; 
        }
    }

    static async makeUploadPayment(tutorID) {
        try {
            //todo: function to fetch tutor's phone by ID then pass it on to the payment gateway for payment
        } catch (error) {
            throw error; 
        }
    }
}

module.exports = PaymentServices;
