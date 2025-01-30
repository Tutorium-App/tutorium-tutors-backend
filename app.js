const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const helmet = require('helmet');
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

// Set security headers
app.use(helmet());

// Enable CORS with specific origin
const corsOptions = {
    origin: ['https://www.tutoriumonline.com', 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};

app.use(cors(corsOptions)); 
// Handle Preflight Requests Manually
app.options('*', cors(corsOptions)); 

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
