const router = require('express').Router();

const paymentController = require('../controllers/payment.controller');

router.get('/fetchPayments', paymentController.fetchPayments);
router.post('/makeUploadPayment', paymentController.makeUploadPayment);

module.exports = router;


//* Define the various routes to the server in this file
