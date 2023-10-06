const PaymentServices = require('../services/payment.services');

// Function to fetch tutors pending payment from the database
exports.fetchPayments = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const payments = await PaymentServices.fetchPayments(tutorID);

        if (!payments) {
            return res.status(404).json({ status: false, message: 'Payments not found' });
        }

        res.json({ status: true, success: payments });
    } catch (error) {
        next(error);
    }
};

// Function to make tutorial upload payment
exports.makeUploadPayment = async (req, res, next) => {
    try {
        const { tutorID } = req.params;

        const payment = await PaymentServices.makeUploadPayment(tutorID);

        if (!payment) {
            return res.status(404).json({ status: false, message: 'Could not make upload payment' });
        }

        res.json({ status: true, success: payment });
    } catch (error) {
        next(error);
    }
};