const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const authenticationRouter = require('./routes/authentication.route');
const homeScreenDataRouter = require('./routes/homeScreenData.route');
const manageTutorialRouter = require('./routes/manageTutorials.route');
const paymentRouter = require('./routes/payment.route');
const profileRouter = require('./routes/profile.route');
const reviewRouter = require('./routes/review.route');
const requestRouter = require('./routes/tutorialRequests.route');
const otpRouter = require('./routes/otp.route');
const rankRouter = require('./routes/rank.route');
const appDataRouter = require('./routes/appData.route');
const messageRouter = require('./routes/message.route');

const app = express(); 

// Enable CORS with specific origin
const corsOptions = {
    origin: 'https://www.tutoriumonline.com/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions)); // Use the CORS middleware

app.use(bodyParser.json());

app.use('/home', homeScreenDataRouter);
app.use('/authentication/', authenticationRouter);
app.use('/manage/', manageTutorialRouter);
app.use('/payment/', paymentRouter);
app.use('/profile/', profileRouter);
app.use('/reviews/', reviewRouter);
app.use('/requests/', requestRouter);
app.use('/otp/', otpRouter);
app.use('/rank/', rankRouter);
app.use('/appData/', appDataRouter);
app.use('/message/', messageRouter);

module.exports = app;
