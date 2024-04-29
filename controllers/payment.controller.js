const PaymentServices = require('../services/payment.services');
const { sendErrorResponse } = require('../utils/errorHandler');


// Function to fetch tutors pending payment from the database
exports.fetchPayments = async (req, res, next) => {
    try {
        const { paymentID } = req.params;

        const payments = await PaymentServices.fetchPayments(paymentID);

        if (!payments) {
            return sendErrorResponse(res, 500, 'Error fetching payment details');
        }

        res.json({ status: true, success: payments });
    } catch (error) {
        next(error);
    }
};
