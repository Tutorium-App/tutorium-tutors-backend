const router = require('express').Router();

const receivePaymentController = require('../controllers/receivePayment.controller');


// Read pending payments
router.get('/readPendingPayments', receivePaymentController.readPendingPayments);

module.exports = router;


//* Define the various routes to the server in this file
